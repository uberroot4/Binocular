'use strict';

import _ from 'lodash';
import Model from './Model.js';
import IllegalArgumentError from '../errors/IllegalArgumentError.js';

const VersionChangeEvent = Model.define('VersionChangeEvent', {
  attributes: [
    'id',
    'commitHash',
    'branchName',
    'author',
    'timestamp',
    'library',
    'oldVersion',
    'newVersion',
    'sourceType', // 'commit' | 'merge' | 'cherry-pick' | 'rebase'
    /**
     * Describes how this version change was introduced into the current branch:
     * - 'commit'       → A direct commit made on this branch
     * - 'merge'        → Brought in via a merge from another branch
     * - 'cherry-pick'  → Explicit cherry-pick operation
     * - 'rebase'       → Rebased from another branch
     *
     * Used to distinguish original changes from propagated ones.
     */

    'sourceMergeCommit', // Hash of the merge commit that brought this in (if applicable) //TODO: check if this makes sense later
    /**
     * If sourceType is 'merge', this holds the commit hash of the merge commit
     * that introduced the change into this branch. Useful for tracking propagation
     * paths and preventing duplicate counting of version changes across branches.
     */

    'introducedCommits', // Array of commit hashes from the source branch
    /**
     * For merges, this is an array of commit hashes (from the source branch)
     * that actually performed the version change (e.g., the original commit(s)
     * updating the package-lock.json). Helps identify true origin of the change.
     */
    'vulnerabilities',
  ],
  keyAttribute: 'id',
});

VersionChangeEvent.keyFromData = (data) => {
  const safeLibrary = data.library.replace(/[^A-Za-z0-9_]+/g, '_');
  return `${data.commitHash}_${safeLibrary}`;
};

VersionChangeEvent.persist = function (_eventData) {
  const eventData = _.clone(_eventData);

  if (!eventData.commitHash || !eventData.library) {
    throw new IllegalArgumentError('VersionChangeEvent requires commitHash and library!');
  }

  eventData.commitHash = eventData.commitHash.toString();
  eventData.library = eventData.library.toString();

  const key = VersionChangeEvent.keyFromData(eventData);

  return VersionChangeEvent.ensureById(key, eventData, {
    ignoreUnknownAttributes: true,
  });
};

export default VersionChangeEvent;
