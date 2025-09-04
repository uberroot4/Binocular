import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TreeMapData } from '../chart/chart.tsx';
import { ParametersType } from '../../../../../types/parameters/parametersType.ts';
import { FileListElementType } from '../../../../../types/data/fileListType.ts';
import { AuthorType } from '../../../../../types/data/authorType.ts';

export function createTreeMapData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  parameters: ParametersType,
  authorList: AuthorType[],
  fileList: FileListElementType[],
): TreeMapData | null {
  if (commits.length === 0) return null; // Early return if no commits are available
  if (authorList.length === 0) return null; // Early return if no authors are available
  if (fileList.length === 0) return null; // Early return if no files are available
  if (!fileList.some((file: FileListElementType) => file.checked)) return null; // Early return if no files are selected

  // Filter authors based on selection and parent status
  const selectedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent == -1);
  const mergedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent > 0);
  if (selectedAuthors.length === 0) return null; // Early return if no authors are selected

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
    if (sortedCommitsByDate.length === 0) return null; // Early return if no commits are available after filtering
  }
  if (sortedCommitsByDate.length === 0) return null; // Early return if no commits are available after filtering

  // Initialize the root of the tree
  const tree: TreeMapData = { type: 'node', name: 'root', pathName: '', fileSize: 0, changes: [{ user: '', amount: 0 }], children: [] };

  sortedCommitsByDate.map((sortedCommit: DataPluginCommit) => {
    // Get all the commits-files connections for the current commit, only those that are related to test files
    const filteredCommitsFilesConnections: DataPluginCommitsFilesConnection[] = commitsFilesConnections.filter(
      (commitFileConnection: DataPluginCommitsFilesConnection) =>
        commitFileConnection._from === sortedCommit._id &&
        testFiles.some((testFile: DataPluginFile) => testFile._id === commitFileConnection._to),
    );
    let user: AuthorType | undefined = authorList.find((author: AuthorType) => author.user._id === sortedCommit.user._id);
    if (!user) return; // Skip this commit if the user is not found
    if (!selectedAuthors.some((author: AuthorType) => author.user._id === user!.user._id)) {
      if (!mergedAuthors.some((author: AuthorType) => author.user._id === user!.user._id)) {
        return; // Skip this commit if the author is not selected
      }
      const partentAuthor: AuthorType | undefined = authorList.find((author: AuthorType) => author.id === user!.parent);
      if (!partentAuthor) return; // Skip this commit if the parent author is not found
      user = partentAuthor;
    }
    filteredCommitsFilesConnections.forEach((commitFileConnection: DataPluginCommitsFilesConnection) => {
      const testFile: DataPluginFile | undefined = files.find((file: DataPluginFile) => file._id === commitFileConnection._to);
      if (testFile) {
        const classPath: string[] = testFile.path ? testFile.path.split('/') : [];
        const node: TreeMapData = {
          type: 'leaf',
          name: testFile.path.slice(testFile.path.lastIndexOf('/') + 1) || testFile.path,
          pathName: testFile.path,
          fileSize: commitFileConnection.lineCount,
          changes: [{ user: user.user.gitSignature, amount: 1 }],
          children: [],
        };
        insertIntoHierarchy(tree, classPath, node);
      }
    });
  });

  return tree;
}

/**
 * Recursive function to insert all classes into hierarchy in TreeMapData format.
 */
function insertIntoHierarchy(root: TreeMapData, classPath: string[], node: TreeMapData) {
  if (!node) return;
  if (classPath.length === 0 || undefined) return;

  let childNode: TreeMapData | undefined = root?.children?.find((child: TreeMapData) => child?.name === classPath[0]);

  // If the child node does not exist, create it
  if (!childNode) {
    // If this is the last part of the class path, create a new leaf node
    if (classPath.length === 1) {
      childNode = node;
      root?.children.push(node);
    } else {
      // If this is not the last part of the class path, create a new child node
      const child: TreeMapData = {
        type: 'node',
        name: classPath[0],
        pathName: root?.pathName + '/' + classPath[0],
        fileSize: 0,
        changes: node.changes,
        children: [],
      };
      childNode = child;
      root?.children.push(child);
    }
  } else {
    // If the child node exists and this is the last part of the class path, update the existing leaf node
    if (classPath.length === 1) {
      childNode.fileSize += node.fileSize;
      node.changes.forEach((change: { user: string; amount: number }) => {
        const existingChange: { user: string; amount: number } | undefined = childNode?.changes.find(
          (c: { user: string; amount: number }) => c.user === change.user,
        );
        if (existingChange) {
          existingChange.amount += 1;
        } else {
          childNode?.changes.push(change);
        }
      });
    }
  }

  insertIntoHierarchy(childNode, classPath.slice(1), node);
}
