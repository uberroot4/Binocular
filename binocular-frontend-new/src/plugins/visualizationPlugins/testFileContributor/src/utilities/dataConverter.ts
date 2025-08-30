import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TestFileContributorChartData } from '../chart/chart.tsx';
import { DataPluginUser } from '../../../../interfaces/dataPluginInterfaces/dataPluginUsers.ts';
import { DataPluginCommitsUsersConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';
import { AuthorType } from '../../../../../types/data/authorType.ts';
import { ParametersType } from '../../../../../types/parameters/parametersType.ts';
import { TestFileContributorSettings } from '../settings/settings.tsx';

export function createPieChartData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  users: DataPluginUser[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  commitsUsersConnections: DataPluginCommitsUsersConnection[],
  parameters: ParametersType,
  settings: TestFileContributorSettings,
  authorList: AuthorType[],
): TestFileContributorChartData[] {
  if (commits.length === 0) return []; // Early return if no commits are available
  if (authorList.length === 0) return []; // Early return if no authors are available

  // Filter authors based on selection and parent status
  const selectedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent == -1);
  const mergedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent > 0);

  if (selectedAuthors.length === 0) return []; // Early return if no authors are selected

  // Filter files for test files
  const testFiles: DataPluginFile[] = files.filter(
    (file: DataPluginFile) => file.path.includes('src/test/') && !file.path.includes('src/test/resources/'),
  );

  // Filter out commits that are merge commits if the flag is set
  if (parameters.parametersGeneral.excludeMergeCommits) {
    commits = commits.filter((commit: DataPluginCommit) => commit.parents.length <= 1);
  }

  const dataMap: Map<string, { added: number; deleted: number }> = new Map();
  commits.map((commit: DataPluginCommit) => {
    // Get all the commits-files connections for the current commit, only those that are related to test files
    const filteredCommitsFilesConnections: DataPluginCommitsFilesConnection[] = commitsFilesConnections.filter(
      (commitFileConnection: DataPluginCommitsFilesConnection) =>
        commitFileConnection._from === commit._id &&
        commitFileConnection.action === settings.selectedCommitType &&
        testFiles.some((testFile: DataPluginFile) => testFile._id === commitFileConnection._to),
    );
    filteredCommitsFilesConnections.map((filteredCommitsFilesConnection: DataPluginCommitsFilesConnection) => {
      commitsUsersConnections.map((commitsUsersConnection: DataPluginCommitsUsersConnection) => {
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

  // Add all selected authors that have contributions to the test files
  dataMap.forEach((value: { added: number; deleted: number }, key: string) => {
    if (selectedAuthors.some((author: AuthorType) => author.user._id === key)) {
      const user: DataPluginUser | undefined = users.find((user: DataPluginUser) => user._id === key);
      result.push(<TestFileContributorChartData>{
        color: authorList.find((author) => author.user._id === key)?.color.main || '#545454',
        name: user?.gitSignature ?? 'Unknown User',
        value: {
          added: value.added,
          deleted: value.deleted,
        },
      });
    }
  });

  // Add all contributions of merged authors to their parent author
  dataMap.forEach((value: { added: number; deleted: number }, key: string) => {
    const mergedAuthor: AuthorType | undefined = mergedAuthors.find((author: AuthorType) => author.user._id === key);
    if (!mergedAuthor) return;
    const parentAuthor: AuthorType | undefined = authorList.find((author: AuthorType) => author.id === mergedAuthor.parent);
    if (!parentAuthor) return;
    const parent: DataPluginUser | undefined = users.find((user: DataPluginUser) => user._id === parentAuthor.user._id);
    if (!parent) return;
    const parentEntry: TestFileContributorChartData | undefined = result.find(
      (entry: TestFileContributorChartData) => entry.name === parent?.gitSignature,
    );
    if (parentEntry) {
      parentEntry.value.added += value.added;
      parentEntry.value.deleted += value.deleted;
    }
  });
  return result;
}
