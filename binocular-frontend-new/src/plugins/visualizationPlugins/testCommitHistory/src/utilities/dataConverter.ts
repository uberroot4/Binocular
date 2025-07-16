import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile, DataPluginFiles } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TestEvolutionChartData } from '../chart/chart.tsx';

export function createBarCharData(
  commits: DataPluginCommit[],
  files: DataPluginFiles[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
): TestEvolutionChartData[] {
  const testFiles: DataPluginFiles[] = files.filter(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (file: DataPluginFile) => file.path.includes('src/test/') && !file.path.includes('src/test/resources/'),
  );

  const sortedCommitsByDate = [...commits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (sortedCommitsByDate.length > 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return sortedCommitsByDate.map((commit: DataPluginCommit) => ({
      time: commit.date.split('T')[0],
      amountOfTestCommits: testFiles.reduce(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (count: number, testFile: DataPluginFile) =>
          count + commitsFilesConnections.filter((connection) => connection._from === commit._id && connection._to === testFile._id).length,
        0,
      ),
    }));
  }

  return [];
}
