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
      prevPkgStr = await repo.readFileAtCommit('package.json', prevSha);
      currPkgStr = await repo.readFileAtCommit('package.json', currSha);
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
      });

      log(`Detected version change: ${change.name} ${change.oldVersion || '∅'} → ${change.newVersion} at ${currSha}`);
    }
  }

  log(`Version change detection completed for branch "${branchName}"`);
}

function extractDependencies(pkgStr) {
  try {
    const pkg = JSON.parse(pkgStr);
    return {
      ...pkg.dependencies,
      ...pkg.devDependencies,
      ...pkg.peerDependencies,
    };
  } catch {
    return {};
  }
}

function diffDependencies(prevDeps, currDeps) {
  const changes = [];

  // additions & updates
  for (const [name, newVersion] of Object.entries(currDeps)) {
    const oldVersion = prevDeps[name];
    if (!oldVersion) {
      changes.push({ name, oldVersion: null, newVersion });
    } else if (oldVersion !== newVersion) {
      changes.push({ name, oldVersion, newVersion });
    }
  }

  // removals
  for (const name of Object.keys(prevDeps)) {
    if (!(name in currDeps)) {
      changes.push({ name, oldVersion: prevDeps[name], newVersion: null });
    }
  }

  return changes;
}
