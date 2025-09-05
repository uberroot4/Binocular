import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TestFileSizeEvolutionChartData } from '../chart/chart.tsx';
import { ParametersType } from '../../../../../types/parameters/parametersType.ts';
import { FileListElementType } from '../../../../../types/data/fileListType.ts';
import { AuthorType } from '../../../../../types/data/authorType.ts';

export function createLineChartData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  parameters: ParametersType,
  authorList: AuthorType[],
  fileList: FileListElementType[],
): TestFileSizeEvolutionChartData[] {
  if (commits.length === 0) return []; // Early return if no commits are available
  if (authorList.length === 0) return []; // Early return if no authors are available
  if (fileList.length === 0) return []; // Early return if no files are available
  if (!fileList.some((file: FileListElementType) => file.checked)) return []; // Early return if no files are selected

  // Filter authors based on selection and parent status
  const selectedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent == -1);
  const mergedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent > 0);
  if (selectedAuthors.length === 0) return []; // Early return if no authors are selected

  // Filter files for test files
  const testFiles: DataPluginFile[] = files.filter(
    (file: DataPluginFile) =>
      file.path.includes('src/test/') &&
      !file.path.includes('src/test/resources/') &&
      fileList.some((f: FileListElementType) => f.checked && f.element._id === file._id),
  );

  // Sort commits by date in ascending order
  let sortedCommitsByDate: DataPluginCommit[] = [...commits].sort(
    (a: DataPluginCommit, b: DataPluginCommit) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  // Filter out commits that are merge commits if the flag is set
  if (parameters.parametersGeneral.excludeMergeCommits) {
    sortedCommitsByDate = commits.filter((commit: DataPluginCommit) => commit.parents.length <= 1);
    if (sortedCommitsByDate.length === 0) return []; // Early return if no commits are available after filtering
  }
  if (sortedCommitsByDate.length === 0) return []; // Early return if no commits are available after filtering

  const testFileIds = new Set<string>();
  const result: TestFileSizeEvolutionChartData[] = [];
  sortedCommitsByDate.map((commit: DataPluginCommit) => {
    if (
      !selectedAuthors.some((author: AuthorType) => author.user._id === commit.user._id) &&
      !mergedAuthors.some((author: AuthorType) => author.user._id === commit.user._id)
    )
      return; // Skip if commit author is not in selected authors or merged authors)
    const commitDate: string = commit.date;
    const relevantConnections: DataPluginCommitsFilesConnection[] = commitsFilesConnections.filter(
      (connection: DataPluginCommitsFilesConnection) => connection._from === commit._id,
    );

    if (!testFiles.some((testFile: DataPluginFile) => !testFileIds.has(testFile._id))) return; // Early return if no test files are available

    const amount: number = testFiles.reduce((count: number, testFile: DataPluginFile) => {
      // Get all connections for the current test file
      const matchedConnections: DataPluginCommitsFilesConnection[] = relevantConnections.filter(
        (connection: DataPluginCommitsFilesConnection) => connection._to === testFile._id,
      );
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

    result.push({ time: commitDate, amountOfTestFiles: amount });
  });

  return result;
}
