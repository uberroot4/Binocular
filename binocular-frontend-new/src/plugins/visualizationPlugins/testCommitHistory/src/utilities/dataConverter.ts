import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { Group, TestCommitHistoryChartData } from '../chart/chart.tsx';
import { ParametersType } from '../../../../../types/parameters/parametersType.ts';
import { FileListElementType } from '../../../../../types/data/fileListType.ts';
import { AuthorType } from '../../../../../types/data/authorType.ts';

export function createBarCharData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  parameters: ParametersType,
  authorList: AuthorType[],
  fileList: FileListElementType[],
): TestCommitHistoryChartData {
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

  const result: TestCommitHistoryChartData = [];
  sortedCommitsByDate.map((commit: DataPluginCommit) => {
    // Extract date portion (YYYY-MM-DD)
    const commitDate: string = commit.date?.split('T')[0];
    if (!commitDate) return; // Skip if date is undefined
    // Get current commit file connections
    const currentCommitFileConnections: DataPluginCommitsFilesConnection[] = commitsFilesConnections.filter(
      (connection: DataPluginCommitsFilesConnection) => connection._from === commit._id,
    );
    const amount: number = testFiles.reduce((count: number, testFile: DataPluginFile) => {
      const matchedConnections: DataPluginCommitsFilesConnection[] = currentCommitFileConnections.filter(
        (connection: DataPluginCommitsFilesConnection) => connection._to === testFile._id,
      );
      if (matchedConnections.length === 0) return count; // No connections for this test file
      return count + matchedConnections.length;
    }, 0);
    if (amount === 0) return; // No test file changes in this commit
    // add to result if date already exists
    const group: Group | undefined = result.find((group: Group) => group.time === commitDate);
    if (group === undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const newGroup: Group = { time: commitDate };
      result.push(newGroup);
    }
    const newGroup: Group | undefined = result.find((group: Group) => group.time === commitDate);
    if (newGroup !== undefined) {
      if (newGroup[commit.user._id] === undefined) {
        newGroup[commit.user._id] = amount;
      } else {
        newGroup[commit.user._id] += amount;
      }
    }
  });

  if (result.length === 0) return []; // Early return if no data is available

  result.forEach((group: Group) => {
    // Ensure all selected authors are represented in each group -> otherwise the stacked bar chart will not render correctly
    selectedAuthors.forEach((author: AuthorType) => {
      if (group[author.user._id] === undefined) {
        group[author.user._id] = 0;
      }
    });
    // Add merged authors' counts to their parent authors
    mergedAuthors.forEach((mergedAuthor: AuthorType) => {
      if (group[mergedAuthor.user._id] === undefined) return;
      const parentAuthor: AuthorType | undefined = authorList.find((author: AuthorType) => author.id === mergedAuthor.parent);
      if (!parentAuthor) return;
      if (group[parentAuthor.user._id] === undefined) {
        group[parentAuthor.user._id] = group[mergedAuthor.user._id] || 0;
      } else {
        group[parentAuthor.user._id] += group[mergedAuthor.user._id] || 0;
      }
      // Remove the merged author's entry after adding to parent
      delete group[mergedAuthor.user._id];
    });
    // Remove all authors that are not selected
    Object.keys(group).forEach((key: string) => {
      if (key !== 'time' && !selectedAuthors.some((author: AuthorType) => author.user._id === key)) {
        delete group[key];
      }
    });
  });
  return result;
}
