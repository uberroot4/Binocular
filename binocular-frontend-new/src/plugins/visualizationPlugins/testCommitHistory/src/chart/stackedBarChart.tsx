import React, { useState } from 'react';
import * as d3 from 'd3';
import { Group, TestCommitHistoryChartData } from './chart.tsx';
import { ScaleLinear, ScaleOrdinal, ScaleTime, Series, SeriesPoint, Stack } from 'd3';
import { XAxis } from './XAxis.tsx';
import { YAxis } from './YAxis.tsx';
import { AuthorType } from '../../../../../types/data/authorType.ts';

const MARGIN = { top: 30, right: 30, bottom: 40, left: 40 };

type StackedBarChartProps = {
  width: number;
  height: number;
  dateRange: { from: string; to: string };
  data: TestCommitHistoryChartData | undefined;
  authorList: AuthorType[];
};

export const StackedBarChart = ({ width, height, dateRange, data, authorList }: StackedBarChartProps) => {
  const boundsWidth: number = width - MARGIN.right - MARGIN.left;
  const boundsHeight: number = height - MARGIN.top - MARGIN.bottom;

  // States for handling brushing
  const [isBrushing, setIsBrushing] = useState(false);
  const [brushStart, setBrushStart] = useState<number | null>(null);
  const [brushEnd, setBrushEnd] = useState<number | null>(null);

  // State for handling tooltip
  const [tooltip, setTooltip] = useState({ visible: false, user: '', amount: 0, x: 0, y: 0 });

  // Initialize the time range for the x-axis
  const times: [Date, Date] = [new Date(dateRange.from), new Date(dateRange.to)];
  const [domain, setDomain] = useState<[Date | undefined, Date | undefined]>(times);

  // If no data is provided, early return
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Check if all groups are empty (i.e., contain only the 'time' key) or have all values as 0
  const allGroupsEmpty: boolean = data.every((group: Group) => {
    const keys: string[] = Object.keys(group).filter((key: string) => key !== 'time');
    if (keys.length === 0) return true; // Only 'time' key exists
    return keys.every((key: string) => group[key] === 0);
  });
  if (allGroupsEmpty) {
    return <div>No data available</div>;
  }

  // X scale
  const xScale: ScaleTime<number, number> = d3
    .scaleTime()
    .domain([domain[0] ?? new Date(), domain[1] ?? new Date()])
    .range([0, boundsWidth]);

  // Y scale
  const sums: number[] = data.map((d: Group) =>
    Object.entries(d)
      .filter(([key]: [string, string | number]) => key !== 'time')
      .reduce((sum: number, [, value]: [string, string | number]) => sum + (value as number), 0),
  );
  const maxY: number | undefined = d3.max(sums);
  const yScale: ScaleLinear<number, number> = d3
    .scaleLinear()
    .domain([0, Math.ceil(maxY || 0)])
    .range([boundsHeight, 0]);
  // Get y ticks for the drawing of horizontal grid lines
  const yTicks: number[] = yScale.ticks();

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
      const startX: number = Math.min(brushStart, brushEnd);
      const endX: number = Math.max(brushStart, brushEnd);
      const newDomain: [Date, Date] = [xScale.invert(startX), xScale.invert(endX)];
      setDomain(newDomain);
    }
    setIsBrushing(false);
    setBrushStart(null);
    setBrushEnd(null);
  };

  // Get subgroup keys (these are the author keys)
  const allSubgroups: string[] = Object.keys(data[0]).filter((key: string) => key !== 'time');
  // Data Wrangling: stack the data
  const stackSeries: Stack<never, { [key: string]: number }, string> = d3.stack().keys(allSubgroups).order(d3.stackOrderNone);
  const series: Array<Series<{ [p: string]: number }, string>> = stackSeries(data);

  // Color Scale
  const selectedAuthors: AuthorType[] = authorList.filter((author: AuthorType) => author.selected && author.parent == -1);
  const colorScale: ScaleOrdinal<string, string, string> = d3
    .scaleOrdinal<string, string>()
    .domain(selectedAuthors.map((author: AuthorType) => String(author.user._id)))
    .range(selectedAuthors.map((author: AuthorType) => author.color.main))
    .unknown('#ccc'); // Default color for unknown authors

  const parseDate: (dateString: string) => Date | null = d3.timeParse('%Y-%m-%d');
  const [start, end] = [new Date(domain[0] ?? new Date()), new Date(domain[1] ?? new Date())];
  const barWidth = 2;

  // Create rectangles for each bar segment
  const rectangles = series.map((subgroup: Series<{ [key: string]: number }, string>) => {
    const userLabel = authorList.find((a: AuthorType) => a.user._id === subgroup.key)?.user.gitSignature ?? 'Unknown';

    return (
      <g
        key={String(subgroup.key)}
        onMouseMove={(e) => {
          setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
        }}
        onMouseLeave={() => {
          setTooltip({ visible: false, user: '', amount: 0, x: 0, y: 0 });
        }}>
        {subgroup.map((group: SeriesPoint<{ [key: string]: number }>) => {
          const dateStr: string = String(group.data.time);
          const date: Date | null = parseDate(dateStr);
          if (!date) return null;
          if (date < start || date > end) return null;

          const x: number = xScale(date);
          const y: number = yScale(group[1]);
          const barHeight: number = yScale(group[0]) - yScale(group[1]);
          const value: number = group[1] - group[0];
          const barKey = `${String(subgroup.key)}-${dateStr}`;

          return (
            <rect
              key={barKey}
              x={x - barWidth / 2}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={colorScale(subgroup.key)}
              onMouseEnter={(e) => {
                setTooltip({
                  visible: true,
                  user: userLabel,
                  amount: value,
                  x: e.clientX,
                  y: e.clientY,
                });
              }}
            />
          );
        })}
      </g>
    );
  });

  return (
    <div>
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
            fill="rgba(154, 111, 176, 0.3)"
            pointerEvents={'none'}
          />
        )}
        <g width={boundsWidth} height={boundsHeight} transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          {/* Horizontal grid lines */}
          {yTicks.map((tick: number) => {
            const y: number = yScale(tick);
            return <line key={`y-grid-${tick}`} x1={0} x2={boundsWidth} y1={y} y2={y} stroke="#ccc" strokeDasharray="3,3" />;
          })}
          {rectangles}
        </g>
        <g transform={`translate(${[MARGIN.left, boundsHeight + MARGIN.top].join(',')})`}>
          <XAxis xScale={xScale} />
        </g>
        <g transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          <YAxis yScale={yScale} />
        </g>
      </svg>
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            top: tooltip.y - 5,
            left: tooltip.x + 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '10px',
            pointerEvents: 'none',
            fontSize: '12px',
            whiteSpace: 'normal',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
            zIndex: 1000,
          }}>
          (Commits) {tooltip.user}
          <div style={{ marginTop: 5 }}>
            <span
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,.2)',
                borderRadius: '50%',
                padding: '2px 6px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
              }}>
              {tooltip.amount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
