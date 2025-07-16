import { RefObject } from 'react';

export function getSVGData(chartContainerRef: RefObject<HTMLDivElement | undefined>): string {
  console.log(chartContainerRef.current?.children[0].outerHTML);
  const svgData = chartContainerRef.current?.children[0].outerHTML;
  if (svgData === undefined) {
    return '<svg xmlns="http://www.w3.org/2000/svg"></svg>';
  }
  return svgData;
}
