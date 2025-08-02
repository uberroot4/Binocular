import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TestFileContributorChartData } from '../chart/chart.tsx';
import { DataPluginUser } from '../../../../interfaces/dataPluginInterfaces/dataPluginUsers.ts';
import { DataPluginCommitsUsersConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';

export function createPieChartData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  users: DataPluginUser[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  commitsUsersConnections: DataPluginCommitsUsersConnection[],
  excludeMergeCommits: boolean,
  commitType: string,
): TestFileContributorChartData[] {
  // Filter for test files
  const testFiles: DataPluginFile[] = files.filter(
    (file: DataPluginFile) => file.path.includes('src/test/') && !file.path.includes('src/test/resources/'),
  );
  // Sort commits by date ascending
  let sortedCommitsByDate: DataPluginCommit[] = [...commits].sort(
    (a: DataPluginCommit, b: DataPluginCommit) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  // Filter out commits that are merge commits if the flag is set
  if (excludeMergeCommits) {
    sortedCommitsByDate = sortedCommitsByDate.filter((commit: DataPluginCommit) => commit.parents.length <= 1);
  }

  if (sortedCommitsByDate.length > 0) {
    const dataMap: Map<string, { added: number; deleted: number }> = new Map();
    sortedCommitsByDate.map((sortedCommit: DataPluginCommit) => {
      // Get all the commits-files connections for the current commit, only those that are related to test files
      const filteredCommitsFilesConnections: DataPluginCommitsFilesConnection[] = commitsFilesConnections.filter(
        (commitFileConnection: DataPluginCommitsFilesConnection) =>
          commitFileConnection._from === sortedCommit._id &&
          commitFileConnection.action === commitType &&
          testFiles.some((testFile: DataPluginFile) => testFile._id === commitFileConnection._to),
      );
      return filteredCommitsFilesConnections.map((filteredCommitsFilesConnection: DataPluginCommitsFilesConnection) => {
        return commitsUsersConnections.map((commitsUsersConnection: DataPluginCommitsUsersConnection) => {
          if (commitsUsersConnection._from === filteredCommitsFilesConnection._from) {
            if (!dataMap.has(commitsUsersConnection._to)) {
              dataMap.set(commitsUsersConnection._to, { added: 0, deleted: 0 });
            }
            const currentValue: { added: number; deleted: number } = dataMap.get(commitsUsersConnection._to)!;
            currentValue.added += filteredCommitsFilesConnection.stats.additions;
            currentValue.deleted += filteredCommitsFilesConnection.stats.deletions;
            dataMap.set(commitsUsersConnection._to, currentValue);
          }
        });
      });
    });

    const result: TestFileContributorChartData[] = [];
    dataMap.forEach((value, key) => {
      const user: DataPluginUser | undefined = users.find((user: DataPluginUser) => user._id === key);
      result.push({
        name: user?.gitSignature ?? 'Unknown User',
        value: {
          added: value.added,
          deleted: value.deleted,
        },
      });
    });
    return result;
  }

  return [];
}
