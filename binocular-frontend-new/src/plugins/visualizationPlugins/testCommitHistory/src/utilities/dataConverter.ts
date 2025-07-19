import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TestEvolutionChartData } from '../chart/chart.tsx';

export function createBarCharData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  excludeMergeCommits: boolean,
): TestEvolutionChartData[] {
  const testFiles: DataPluginFile[] = files.filter(
    (file: DataPluginFile) => file.path.includes('src/test/') && !file.path.includes('src/test/resources/'),
  );

  let sortedCommitsByDate = [...commits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  // Filter out commits that are merge commits if the flag is set
  if (excludeMergeCommits) {
    sortedCommitsByDate = sortedCommitsByDate.filter((commit: DataPluginCommit) => commit.parents.length <= 1);
  }

  if (sortedCommitsByDate.length > 0) {
    return sortedCommitsByDate.map((commit: DataPluginCommit) => {
      const commitDate = commit.date?.split('T')[0];
      const relevantConnections = commitsFilesConnections.filter((connection) => connection._from === commit._id);

      const amount = testFiles.reduce((count, testFile: DataPluginFile) => {
        const matchedConnections = relevantConnections.filter((connection) => connection._to === testFile._id);
        return count + matchedConnections.length;
      }, 0);

      return {
        time: commitDate,
        amountOfTestCommits: amount,
      };
    });
  }

  return [];
}
