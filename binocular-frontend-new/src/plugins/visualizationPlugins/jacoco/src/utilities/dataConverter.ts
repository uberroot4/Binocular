import { Counters, SunburstData } from '../chart/chart.tsx';
import { DataPluginJacocoReport } from '../../../../interfaces/dataPluginInterfaces/dataPluginArtifacts.ts';

export function createSunburstData(data: DataPluginJacocoReport[], selectedReport: string): SunburstData {
  if (!data || data.length === 0) return { name: 'No data', counters: [], children: [] };

  // Parse the XML content of the selected report
  const parser = new DOMParser();
  const xmlDoc: Document = parser.parseFromString(
    selectedReport === 'last' && data.length > 1 ? data[data.length - 1].xmlContent : data[0].xmlContent,
    'application/xml',
  );

  // Extract the root report element and initialize the root node for SunburstData
  const report: HTMLCollectionOf<Element> = xmlDoc.getElementsByTagName('report');
  const rootNode: SunburstData = { name: (report[0]?.getAttribute('name') || 'Jacoco report') + ': ', counters: [], children: [] };

  // Get all class elements from the XML
  const classes: HTMLCollectionOf<Element> = xmlDoc.getElementsByTagName('class');
  // Iterate over all classes in the report
  for (let i: number = 0; i < classes.length; i++) {
    const classElement: Element = classes[i];
    const className: string = classElement.getAttribute('name') || 'Unknown Class';

    // Get all method elements within the class
    const methods: HTMLCollectionOf<Element> = classElement.getElementsByTagName('method');
    // Iterate over all methods in the class
    for (let j: number = 0; j < methods.length; j++) {
      const methodElement: Element = methods[j];
      const methodName: string = methodElement.getAttribute('name') || 'Unknown Method';

      // Get all counter elements within the method
      const counters: Counters = {
        INSTRUCTION: { missed: 0, covered: 0 },
        LINE: { missed: 0, covered: 0 },
        COMPLEXITY: { missed: 0, covered: 0 },
        METHOD: { missed: 0, covered: 0 },
      };
      const counterElements: HTMLCollectionOf<Element> = methodElement.getElementsByTagName('counter');
      for (let k: number = 0; k < counterElements.length; k++) {
        const counterElement: Element = counterElements[k];
        const type: string | null = counterElement.getAttribute('type');
        const missed: number = parseInt(counterElement.getAttribute('missed') || '0');
        const covered: number = parseInt(counterElement.getAttribute('covered') || '0');

        if (type) {
          counters[type as keyof Counters] = { missed, covered };
        }
      }

      // Create a method node with its counters
      const methodNode: SunburstData = {
        name: methodName,
        counters: [counters],
        children: undefined,
      };

      // Insert the method node into the hierarchical package structure
      insertIntoHierarchy(rootNode, className.split('/'), methodNode);
    }
  }
  return rootNode;
}

/**
 * Recursive function to insert all methods from each class into hierarchy in SunburstData format.
 */
function insertIntoHierarchy(root: SunburstData, classPath: string[], classNode: SunburstData) {
  if (classPath.length === 0) return;

  const currentPart: string = classPath[0];
  let childNode: SunburstData | undefined = root.children?.find((child: SunburstData) => child.name === currentPart);

  if (!childNode) {
    childNode = { name: currentPart, children: [] };
    if (!root.children) root.children = [];
    root.children.push(childNode);
  }

  if (classPath.length > 1) {
    insertIntoHierarchy(childNode, classPath.slice(1), classNode);
  } else {
    if (!childNode.children) childNode.children = [];
    childNode.children.push(classNode);
  }
}
