import { RefObject } from 'react';
import { TreeMapData } from '../chart/chart.tsx';

/**
 * Extracts the SVG data from a chart container reference.
 * @param chartContainerRef the reference to the chart container
 */
export function getSVGData(chartContainerRef: RefObject<HTMLDivElement | undefined>): string {
  const svgData: string | undefined = chartContainerRef.current?.children[0].outerHTML;
  if (svgData === undefined) {
    return '<svg xmlns="http://www.w3.org/2000/svg"></svg>';
  }
  return svgData;
}

/**
 * Calculates the maximum number of changes in a tree map data structure.
 * @param treeMapData the tree map data to analyze
 */
export function getMaxAmountOfChanges(treeMapData: TreeMapData): number {
  let maxAmountOfChanges: number = 0;
  if (!treeMapData || treeMapData.children.length === 0) return maxAmountOfChanges;
  const traverse = (node: TreeMapData) => {
    if (!node) return;
    if (node.type === 'leaf') {
      maxAmountOfChanges = Math.max(
        maxAmountOfChanges,
        node.changes.reduce((sum: number, change: { user: string; amount: number }) => sum + change.amount, 0),
      );
    } else if (node.children) {
      node.children.forEach(traverse);
    }
  };
  traverse(treeMapData);
  return maxAmountOfChanges;
}

/**
 * Calculates the width of a text string when rendered with a specific font.
 * @param text the text string to measure
 * @param font the font style to use for measurement, default is '12 px sans-serif'
 */
export function getTextWidth(text: string, font = '12px sans-serif') {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (!context) return 0;
  context.font = font;
  return context.measureText(text).width;
}

/**
 * Truncates a text string to fit within a specified width
 * @param text the text string to truncate
 * @param maxWidth the maximum width in pixels that the text should occupy
 * @param font the font style to use for measurement, default is '12 px sans-serif'
 */
export function truncateTextToWidth(text: string, maxWidth: number, font = '12px sans-serif') {
  if (getTextWidth(text, font) <= maxWidth) return text;
  let truncated: string = text;
  while (truncated.length > 0 && getTextWidth(truncated + '…', font) > maxWidth) {
    truncated = truncated.slice(0, -1);
  }
  return truncated + '…';
}
