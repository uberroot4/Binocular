import { RefObject } from 'react';
import { TestFileSizeEvolutionChartData } from '../chart/chart.tsx';

// Function to get SVG data from the chart container reference
export function getSVGData(chartContainerRef: RefObject<HTMLDivElement | undefined>): string {
  const svgData: string | undefined = chartContainerRef.current?.children[0].outerHTML;
  if (svgData === undefined) {
    return '<svg xmlns="http://www.w3.org/2000/svg"></svg>';
  }
  return svgData;
}

/**
 * Interpolates between two TestFileSizeEvolutionChartData points to find the value at a target time.
 * @param a - First data point
 * @param b - Second data point
 * @param targetTime - The target time for interpolation
 */
export function interpolate(a: TestFileSizeEvolutionChartData, b: TestFileSizeEvolutionChartData, targetTime: Date) {
  const t: number = (targetTime.getTime() - new Date(a.time).getTime()) / (new Date(b.time).getTime() - new Date(a.time).getTime()); // ratio between 0 and 1
  return {
    time: targetTime.toISOString(),
    amountOfTestFiles: Math.max(a.amountOfTestFiles + (b.amountOfTestFiles - a.amountOfTestFiles) * t, 0),
  };
}

/**
 * Crops the data to fit within the specified time range by interpolating points at the boundaries if necessary.
 * @param data - Array of TestFileSizeEvolutionChartData to be cropped
 * @param minTime - Minimum time boundary for cropping
 * @param maxTime - Maximum time boundary for cropping
 */
export function cropData(data: TestFileSizeEvolutionChartData[], minTime: Date | undefined, maxTime: Date | undefined) {
  if (!minTime || !maxTime) {
    return data; // No cropping if no min/max time is provided
  }

  const result: TestFileSizeEvolutionChartData[] = [];

  for (let i: number = 0; i < data.length - 1; i++) {
    const p1: TestFileSizeEvolutionChartData = data[i];
    const p2: TestFileSizeEvolutionChartData = data[i + 1];

    const t1 = new Date(p1.time);
    const t2 = new Date(p2.time);
    const min: Date = minTime;
    const max: Date = maxTime;

    if (t2 < min || t1 > max) {
      continue; // completely outside
    }

    let start: TestFileSizeEvolutionChartData = p1;
    let end: TestFileSizeEvolutionChartData = p2;

    if (t1 < min) start = interpolate(p1, p2, min);
    if (t2 > max) end = interpolate(p1, p2, max);

    result.push(start, end); // add cropped segment
  }

  return result;
}
