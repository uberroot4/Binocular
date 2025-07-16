import React, { useState } from 'react';
import * as d3 from 'd3';
import { XAxis } from './XAxis';
import { YAxis } from './YAxis.tsx';
import { TestEvolutionChartData } from './chart.tsx';

const MARGIN = { top: 30, right: 30, bottom: 40, left: 40 };

type LineChartProps = {
  width: number;
  height: number;
  dateRange: { from: string; to: string };
  data: TestEvolutionChartData[] | undefined;
};

export const BarChart = ({ width, height, dateRange, data }: LineChartProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  const [hovered, setHovered] = useState(false);

  // States for handling brushing
  const [isBrushing, setIsBrushing] = useState(false);
  const [brushStart, setBrushStart] = useState<number | null>(null);
  const [brushEnd, setBrushEnd] = useState<number | null>(null);

  // X scale
  const times: [Date, Date] = [new Date(dateRange.from), new Date(dateRange.to)];
  const dateDomain = d3.extent(times);
  const [domain, setDomain] = useState<[Date | undefined, Date | undefined]>(times);
  const defaultStart = new Date();
  const defaultEnd = new Date();

  const xScale = d3
    .scaleTime()
    .domain([domain[0] ?? defaultStart, domain[1] ?? defaultEnd])
    .range([0, boundsWidth]);

  // If no data is provided, early return
  if (!data) {
    return <div>No data available</div>;
  }

  // Y scale
  const maxY = d3.max(data, (d) => d.amountOfTestCommits) ?? 0;
  const yTicks = d3.range(0, Math.ceil(maxY) + 1);
  const yScale = d3
    .scaleLinear()
    .domain([0, Math.ceil(maxY || 0)])
    .range([boundsHeight, 0]);

  // Mouse handlers for custom brushing
  const handleMouseDown = (event: React.MouseEvent<SVGRectElement>) => {
    setIsBrushing(true);
    setBrushStart(event.nativeEvent.offsetX);
    setBrushEnd(null); // Reset brush end when starting a new brush
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
        <g width={boundsWidth} height={boundsHeight} transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          {data.map((d, i) => {
            const customTimeParser = d3.timeParse('%Y-%m-%d');
            const date = customTimeParser(d.time);
            const start = new Date(domain[0] ?? new Date());
            const end = new Date(domain[1] ?? new Date());
            if (!date) return null;
            const x = xScale(date);
            const y = yScale(d.amountOfTestCommits);
            const barWidth = 1; // optional: spacing
            const barHeight = boundsHeight - y;

            return (
              <>
                {date >= start && date <= end ? (
                  <rect key={i} x={x - barWidth / 2} y={y} width={barWidth} height={barHeight} fill="steelblue" />
                ) : null}
              </>
            );
          })}
          {/* Horizontal grid lines on full integers */}
          {yTicks.map((tick, i) => {
            const y = yScale(tick);
            return <>{i % 10 == 0 ? <line key={i} x1={0} x2={boundsWidth} y1={y} y2={y} stroke="#ccc" strokeDasharray="3,3" /> : null}</>;
          })}
        </g>
        <g transform={`translate(${[MARGIN.left, boundsHeight + MARGIN.top].join(',')})`}>
          <XAxis xScale={xScale} />
        </g>
        <g transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          <YAxis yScale={yScale} />
        </g>
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
            fill="rgba(154, 111, 176, 0.3)"
            pointerEvents={'none'}
          />
        )}
      </svg>
      {/* Reset button */}
      <div
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
        }}>
        <button
          onClick={() => setDomain(dateDomain)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundColor: hovered ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)',
            color: 'rgba(0,0,0,0.6)',
            border: '2px solid rgba(0,0,0,0.1)',
            padding: '0.25rem 0.25rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
          }}>
          Reset
        </button>
      </div>
    </div>
  );
};
