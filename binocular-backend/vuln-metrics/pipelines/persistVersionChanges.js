'use strict';

import VersionChangeEvent from '../../models/VersionChangeEvent.js';
import debug from 'debug';
import { v4 as uuidv4 } from 'uuid';

const log = debug('vuln-metrics:detect');

export async function persistVersionChanges(repo, branchName) {
  const commits = await repo.getFirstParentCommits(branchName);
  if (commits.length < 2) {
    log(`Not enough commits to process on branch "${branchName}"`);
    return;
  }

  for (let i = 1; i < commits.length; i++) {
    const prev = commits[i - 1];
    const curr = commits[i];
    const prevSha = prev.oid;
    const currSha = curr.oid;

    let prevPkgStr, currPkgStr;
    try {
      prevPkgStr = await repo.readFileAtCommit('package-lock.json', prevSha);
      currPkgStr = await repo.readFileAtCommit('package-lock.json', currSha);
    } catch (err) {
      log(`Skipping commit ${currSha}: could not read package.json`);
      continue;
    }

    const prevDeps = extractDependencies(prevPkgStr);
    const currDeps = extractDependencies(currPkgStr);

    const changes = diffDependencies(prevDeps, currDeps);
    if (!changes.length) continue;

    for (const change of changes) {
      await VersionChangeEvent.persist({
        id: uuidv4(),
        commitHash: currSha,
        branchName,
        timestamp: curr.commit.committer.timestamp,
        author: curr.commit.committer.name,
        library: change.name,
        oldVersion: change.oldVersion,
        newVersion: change.newVersion,
        sourceType: 'commit',
        direct: change.direct,
        wasDirect: change.wasDirect,
      });

      console.log(`Detected version change: ${change.name} ${change.oldVersion || '∅'} → ${change.newVersion} at ${currSha}`);
    }
  }

  log(`Version change detection completed for branch "${branchName}"`);
}

function extractDependencies(pkgLockStr) {
  try {
    const lock = JSON.parse(pkgLockStr);
    const deps = {};

    const walk = (node, isRoot = false) => {
      for (const [name, info] of Object.entries(node.dependencies || {})) {
        deps[name] = {
          version: info.version || null,
          direct: isRoot,
        };
        walk(info, false);
      }
    };

    walk(lock, true);
    return deps;
  } catch {
    return {};
  }
}

function diffDependencies(prevDeps, currDeps) {
  const changes = [];

  for (const [name, currInfo] of Object.entries(currDeps)) {
    const prevInfo = prevDeps[name];

    // Newly added dependency
    if (!prevInfo) {
      changes.push({
        name,
        oldVersion: null,
        newVersion: currInfo.version,
        wasDirect: false,
        isDirect: currInfo.direct,
      });
      continue;
    }

    // Version or directness changed
    if (prevInfo.version !== currInfo.version || prevInfo.direct !== currInfo.direct) {
      changes.push({
        name,
        oldVersion: prevInfo.version,
        newVersion: currInfo.version,
        wasDirect: prevInfo.direct,
        isDirect: currInfo.direct,
      });
    }
  }

  for (const [name, prevInfo] of Object.entries(prevDeps)) {
    if (!(name in currDeps)) {
      changes.push({
        name,
        oldVersion: prevInfo.version,
        newVersion: null,
        wasDirect: prevInfo.direct,
        isDirect: false,
      });
    }
  }

  return changes;
}
