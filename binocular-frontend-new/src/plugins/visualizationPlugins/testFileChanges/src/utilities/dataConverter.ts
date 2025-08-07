import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { TreeMapData } from '../chart/chart.tsx';

export function createTreeMapData(
  commits: DataPluginCommit[],
  files: DataPluginFile[],
  commitsFilesConnections: DataPluginCommitsFilesConnection[],
  excludeMergeCommits: boolean,
): TreeMapData {
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

  const tree: TreeMapData = { type: 'node', name: 'root', pathName: '', fileSize: 0, amountOfChanges: 0, children: [] };

  if (sortedCommitsByDate.length > 0) {
    sortedCommitsByDate.map((sortedCommit: DataPluginCommit) => {
      // Get all the commits-files connections for the current commit, only those that are related to test files
      const filteredCommitsFilesConnections: DataPluginCommitsFilesConnection[] = commitsFilesConnections.filter(
        (commitFileConnection: DataPluginCommitsFilesConnection) =>
          commitFileConnection._from === sortedCommit._id &&
          testFiles.some((testFile: DataPluginFile) => testFile._id === commitFileConnection._to),
      );
      filteredCommitsFilesConnections.forEach((commitFileConnection: DataPluginCommitsFilesConnection) => {
        const testFile: DataPluginFile | undefined = files.find((file: DataPluginFile) => file._id === commitFileConnection._to);
        if (testFile) {
          const classPath: string[] = testFile.path ? testFile.path.split('/') : [];
          const node: TreeMapData = {
            type: 'leaf',
            name: testFile.path.slice(testFile.path.lastIndexOf('/') + 1) || testFile.path,
            pathName: testFile.path,
            fileSize: commitFileConnection.lineCount,
            amountOfChanges: 1,
            children: [],
          };
          insertIntoHierarchy(tree, classPath, node);
        }
      });
    });
  }

  return tree;
}

/**
 * Recursive function to insert all classes into hierarchy in TreeMapData format.
 */
function insertIntoHierarchy(root: TreeMapData, classPath: string[], node: TreeMapData) {
  if (classPath.length === 0 || undefined) return;

  let childNode: TreeMapData | undefined = root.children?.find((child: TreeMapData) => child.name === classPath[0]);

  // If the child node does not exist, create it
  if (!childNode) {
    if (classPath.length === 1) {
      // If this is the last part of the class path, create a new leaf node
      childNode = node;
      root.children.push(node);
    } else {
      // If this is not the last part of the class path, create a new child node
      const child: TreeMapData = {
        type: 'node',
        name: classPath[0],
        pathName: root.pathName + '/' + classPath[0],
        fileSize: 0,
        amountOfChanges: 1,
        children: [],
      };
      childNode = child;
      root.children.push(child);
    }
  } else {
    // If the child node exists, update the number of changes
    childNode.amountOfChanges += 1;
  }

  insertIntoHierarchy(childNode, classPath.slice(1), node);
}
