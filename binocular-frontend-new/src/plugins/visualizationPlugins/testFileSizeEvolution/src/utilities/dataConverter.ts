import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TestFileSizeEvolutionChartData } from '../chart/chart.tsx';

export function createLineChartData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  excludeMergeCommits: boolean,
): TestFileSizeEvolutionChartData[] {
  const testFiles: DataPluginFile[] = files.filter(
    (file: DataPluginFile) => file.path.includes('src/test/') && !file.path.includes('src/test/resources/'),
  );

  let sortedCommitsByDate = [...commits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  // Filter out commits that are merge commits if the flag is set
  if (excludeMergeCommits) {
    sortedCommitsByDate = sortedCommitsByDate.filter((commit: DataPluginCommit) => commit.parents.length <= 1);
  }

  if (sortedCommitsByDate.length > 0) {
    const testFileIds = new Set<string>();
    return sortedCommitsByDate.map((commit: DataPluginCommit) => {
      const commitDate = commit.date;
      const relevantConnections = commitsFilesConnections.filter((connection) => connection._from === commit._id);

      const amount = testFiles.reduce((count, testFile: DataPluginFile) => {
        // Get all connections for the current test file
        const matchedConnections = relevantConnections.filter((connection) => connection._to === testFile._id);
        for (const connection of matchedConnections) {
          if (connection.action === 'added') {
            if (!testFileIds.has(connection._to)) {
              testFileIds.add(connection._to);
            }
          } else if (connection.action === 'deleted') {
            if (testFileIds.has(connection._to)) {
              testFileIds.delete(connection._to);
            }
          }
        }
        count = testFileIds.size;
        return count;
      }, 0);

      return {
        time: commitDate,
        amountOfTestFiles: amount,
      };
    });
  }

  return [];
}
