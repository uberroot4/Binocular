import React, { useState } from 'react';
import * as d3 from 'd3';
import { XAxis } from './XAxis.tsx';
import { TestFileSizeEvolutionChartData } from './chart.tsx';
import { YAxis } from './YAxis.tsx';
import { cropData } from '../utilities/utilities.ts';
import { Area, Line, ScaleLinear, ScaleTime } from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 40, left: 40 };

type LineChartProps = {
  width: number;
  height: number;
  dateRange: { from: string; to: string };
  data: TestFileSizeEvolutionChartData[] | undefined;
};

export const LineChart = ({ width, height, dateRange, data }: LineChartProps) => {
  // Calculate the bounds for the chart area
  const boundsWidth: number = width - MARGIN.right - MARGIN.left;
  const boundsHeight: number = height - MARGIN.top - MARGIN.bottom;

  // States for handling brushing
  const [isBrushing, setIsBrushing] = useState(false);
  const [brushStart, setBrushStart] = useState<number | null>(null);
  const [brushEnd, setBrushEnd] = useState<number | null>(null);

  // Initialize the time range for the x-axis
  const times: [Date, Date] = [new Date(dateRange.from), new Date(dateRange.to)];
  const [domain, setDomain] = useState<[Date | undefined, Date | undefined]>(times);

  // If no data is provided, early return
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  const croppedData: TestFileSizeEvolutionChartData[] = cropData(data, domain[0], domain[1]);

  // X scale
  const xScale: ScaleTime<number, number> = d3
    .scaleTime()
    .domain([domain[0] ?? new Date(), domain[1] ?? new Date()])
    .range([0, boundsWidth]);

  // Y scale
  const maxY: number = d3.max(data, (d: TestFileSizeEvolutionChartData) => d.amountOfTestFiles) ?? 0;
  const yScale: ScaleLinear<number, number> = d3
    .scaleLinear()
    .domain([0, Math.ceil(maxY || 0)])
    .range([boundsHeight, 0]);
  // Get y ticks for the drawing of horizontal grid lines
  const yTicks: number[] = yScale.ticks();

  // Build the area
  const areaBuilder: Area<TestFileSizeEvolutionChartData> = d3
    .area<TestFileSizeEvolutionChartData>()
    .x((d: TestFileSizeEvolutionChartData) => xScale(new Date(d.time)))
    .y1((d: TestFileSizeEvolutionChartData) => yScale(d.amountOfTestFiles))
    .y0(yScale(0))
    .curve(d3.curveStep);
  const areaPath: string | null = areaBuilder(croppedData);

  // If no arePath was created
  if (!areaPath) {
    return <div>No data available</div>;
  }

  // Build the line
  const lineBuilder: Line<TestFileSizeEvolutionChartData> = d3
    .line<TestFileSizeEvolutionChartData>()
    .x((d: TestFileSizeEvolutionChartData) => xScale(new Date(d.time)))
    .y((d: TestFileSizeEvolutionChartData) => yScale(d.amountOfTestFiles))
    .curve(d3.curveStep);
  const linePath: string | null = lineBuilder(croppedData);

  // If no arePath was created
  if (!linePath) {
    return <div>No data available</div>;
  }

  // Mouse handlers for custom brushing
  const handleMouseDown = (event: React.MouseEvent<SVGRectElement>) => {
    setIsBrushing(true);
    setBrushStart(event.nativeEvent.offsetX);
    setBrushEnd(null); // Reset the brush end when starting a new brush
  };
  const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
    if (!isBrushing || brushStart === null) return;
    setBrushEnd(event.nativeEvent.offsetX);
  };
  const handleMouseUp = () => {
    if (isBrushing && brushStart !== null && brushEnd !== null) {
      const startX = Math.min(brushStart, brushEnd);
      const endX = Math.max(brushStart, brushEnd);
      const newDomain: [Date, Date] = [xScale.invert(startX), xScale.invert(endX)];
      setDomain(newDomain);
    }
    setIsBrushing(false);
    setBrushStart(null);
    setBrushEnd(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <svg width={width} height={height}>
        {/* Brushing overlay */}
        <rect
          x={MARGIN.left}
          y={MARGIN.top}
          width={boundsWidth}
          height={boundsHeight}
          fill="transparent"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
        {isBrushing && brushStart !== null && brushEnd !== null && (
          <rect
            x={Math.min(brushStart, brushEnd)}
            y={MARGIN.top}
            width={Math.abs(brushEnd - brushStart)}
            height={boundsHeight}
            fill="rgba(66, 165, 245, 0.3)"
            pointerEvents={'none'}
          />
        )}
        <g width={boundsWidth} height={boundsHeight} transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          <defs>
            <linearGradient id="fade-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#42A5F5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#42A5F5" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Horizontal grid lines */}
          {yTicks.map((tick, i) => {
            const y: number = yScale(tick);
            return <>{<line key={i} x1={0} x2={boundsWidth} y1={y} y2={y} stroke="#ccc" strokeDasharray="3,3" />}</>;
          })}
          <path d={areaPath} opacity={1} stroke="none" fill="url(#fade-area)" fillOpacity={0.4} />
          <path d={linePath || undefined} stroke="#42A5F5" fill="none" strokeWidth={2} pointerEvents="none" />
        </g>
        <g transform={`translate(${[MARGIN.left, boundsHeight + MARGIN.top].join(',')})`}>
          <XAxis xScale={xScale} />
        </g>
        <g transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          <YAxis yScale={yScale} />
        </g>
      </svg>
    </div>
  );
};
