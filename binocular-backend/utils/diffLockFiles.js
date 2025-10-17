/**
 * Compares two package-lock.json contents and returns version changes.
 *
 * @param {string} prevLockStr - JSON string of previous package-lock.json
 * @param {string} currLockStr - JSON string of current package-lock.json
 * @returns {Array<{ name: string, oldVersion: string|null, newVersion: string }>}
 */
export function diffLockFiles(prevLockStr, currLockStr) {
  let prevDeps = {};
  let currDeps = {};

  try {
    const prevParsed = JSON.parse(prevLockStr);
    const currParsed = JSON.parse(currLockStr);

    prevDeps = prevParsed.dependencies || {};
    currDeps = currParsed.dependencies || {};
  } catch (err) {
    console.error('Error parsing lock files:', err.message);
    return [];
  }

  const changes = [];

  const allPackages = new Set([...Object.keys(prevDeps), ...Object.keys(currDeps)]);

  for (const name of allPackages) {
    const prevVersion = prevDeps[name]?.version;
    const currVersion = currDeps[name]?.version;

    if (prevVersion !== currVersion) {
      changes.push({
        name,
        oldVersion: prevVersion || null,
        newVersion: currVersion || null,
      });
    }
  }

  return changes;
}
