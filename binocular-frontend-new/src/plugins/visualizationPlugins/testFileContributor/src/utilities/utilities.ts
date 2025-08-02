import { RefObject } from 'react';

// Function to get SVG data from the chart container reference
export function getSVGData(chartContainerRef: RefObject<HTMLDivElement | undefined>): string {
  const svgData = chartContainerRef.current?.children[0].outerHTML;
  if (svgData === undefined) {
    return '<svg xmlns="http://www.w3.org/2000/svg"></svg>';
  }
  return svgData;
}
