'use strict';

export async function getCommitMessageSingle(commitMessage: string) {
  const payload = commitMessage.trim() === '' ? '' : '?q=' + commitMessage.trim();
  if (!payload) {
    return [];
  }

  const res = await fetch(
    window.location.protocol + '//' + window.location.hostname + ':48763/api/getCommitType?commitMessage=' + encodeURIComponent(payload),
  );

  if (!res.ok) {
    return [];
  }
  return await res.json();
}

export async function getCommitMessageList(commits: { sha: string; message: string }[]) {
  const res = await fetch(window.location.protocol + '//' + window.location.hostname + ':48763/api/getCommitType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ commits: commits }),
  });

  return await res.json();
}
