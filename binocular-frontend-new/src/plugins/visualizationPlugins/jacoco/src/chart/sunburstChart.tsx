import * as d3 from 'd3';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Arc, HierarchyNode, HierarchyRectangularNode, ScaleOrdinal } from 'd3';
import { Counters, Metric, SunburstData } from './chart.tsx';
import ArrowBack from '../../assets/arrow-left-long.svg';
import { formatDate } from '../utilities/utilities.ts';

type SunburstChartProps = {
  width: number;
  height: number;
  data: SunburstData;
  reportDate: string;
};

const BLUE_PALETTE: string[] = ['#0D47A1', '#1976D2', '#42A5F5', '#90CAF9', '#E3F2FD'];
const METRICS: Metric[] = ['INSTRUCTION', 'LINE', 'COMPLEXITY', 'METHOD'];

interface ExtendedHierarchyNode extends d3.HierarchyRectangularNode<SunburstData> {
  current?: d3.HierarchyRectangularNode<SunburstData>;
  target?: { x0: number; y0: number; x1: number; y1: number };
}

export const SunburstChart = ({ width, height, data, reportDate }: SunburstChartProps) => {
  const d3Container: MutableRefObject<SVGSVGElement | null> = useRef<SVGSVGElement | null>(null);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [tableData, setTableData] = useState<{ name: string; covered: number; missed: number }[]>([]);

  useEffect(() => {
    if (!data || !data.children || data.children.length === 0) return;
    if (d3Container.current && data.children?.length) {
      const radius: number = width / 6;

      // Compute the layout (sort the data).
      const hierarchy: HierarchyNode<SunburstData> = d3
        .hierarchy(data)
        .sum((d: SunburstData) => {
          const counters: Counters | undefined = d.counters?.[0];
          return (
            (counters?.INSTRUCTION?.covered || 0) +
            (counters?.INSTRUCTION?.missed || 0) +
            (counters?.LINE?.covered || 0) +
            (counters?.LINE?.missed || 0) +
            (counters?.COMPLEXITY?.covered || 0) +
            (counters?.COMPLEXITY?.missed || 0) +
            (counters?.METHOD?.covered || 0) +
            (counters?.METHOD?.missed || 0)
          );
        })
        .sort((a: HierarchyNode<SunburstData>, b: HierarchyNode<SunburstData>) => (b.value as number) - (a.value as number));

      const root: HierarchyRectangularNode<SunburstData> = d3.partition<SunburstData>().size([2 * Math.PI, hierarchy.height + 1])(
        hierarchy,
      );
      root.each((d: ExtendedHierarchyNode) => (d.current = d));

      // Color scale for top-level categories (depth 1), dark → light
      const topColor: ScaleOrdinal<string, string> = d3.scaleOrdinal<string, string>(BLUE_PALETTE);
      const maxDepth: number = root.height;

      // Arc generator
      const arc: Arc<never, { x0: number; y0: number; x1: number; y1: number }> = d3
        .arc<{ x0: number; y0: number; x1: number; y1: number }>()
        .startAngle((d: { x0: number; y0: number; x1: number; y1: number }) => d.x0)
        .endAngle((d: { x0: number; y0: number; x1: number; y1: number }) => d.x1)
        .padAngle((d: { x0: number; y0: number; x1: number; y1: number }) => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius((d: { x0: number; y0: number; x1: number; y1: number }) => d.y0 * radius)
        .outerRadius((d: { x0: number; y0: number; x1: number; y1: number }) => Math.max(d.y0 * radius, d.y1 * radius - 1));

      // SVG
      const svg = d3
        .select(d3Container.current)
        .attr('viewBox', [-height / 2, -width / 2, height, width])
        .style('font', '15px sans-serif');
      svg.selectAll('*').remove();

      // Paths
      const path = svg
        .append('g')
        .selectAll('path')
        .data(root.descendants().slice(1))
        .join('path')
        .attr('fill', (d: HierarchyRectangularNode<SunburstData>) => computeNodeFill(d, topColor, maxDepth))
        .attr('fill-opacity', (d: ExtendedHierarchyNode) => (arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0))
        .attr('pointer-events', (d: ExtendedHierarchyNode) => (arcVisible(d.current) ? 'auto' : 'none'))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        .attr('d', (d: ExtendedHierarchyNode) => arc(d.current))
        .on('mouseenter', (event, d: HierarchyRectangularNode<SunburstData>) => {
          const aggregatedCounters = calculateAggregatedCounters(d);
          setTooltip({
            visible: true,
            x: event.pageX + 10,
            y: event.pageY + 10,
            content: `${d
              .ancestors()
              .map((d) => d.data.name)
              .reverse()
              .join('/')}`,
          });
          setTableData([
            {
              name: 'instruction',
              covered: aggregatedCounters.INSTRUCTION?.covered ?? 0,
              missed: aggregatedCounters.INSTRUCTION?.missed ?? 0,
            },
            {
              name: 'line',
              covered: aggregatedCounters.LINE?.covered ?? 0,
              missed: aggregatedCounters.LINE?.missed ?? 0,
            },
            {
              name: 'complexity',
              covered: aggregatedCounters.COMPLEXITY?.covered ?? 0,
              missed: aggregatedCounters.COMPLEXITY?.missed ?? 0,
            },
            {
              name: 'method',
              covered: aggregatedCounters.METHOD?.covered ?? 0,
              missed: aggregatedCounters.METHOD?.missed ?? 0,
            },
          ]);
        })
        .on('mousemove', (event) => {
          setTooltip((prev: { visible: boolean; content: string; x: number; y: number }) => ({
            ...prev,
            x: event.pageX + 10,
            y: event.pageY + 10,
          }));
        })
        .on('mouseleave', () => {
          setTooltip((prev: { visible: boolean; content: string; x: number; y: number }) => ({ ...prev, visible: false }));
        });

      // Click to zoom
      path
        .filter((d: HierarchyRectangularNode<SunburstData>) => d.children !== undefined && d.children.length > 0)
        .style('cursor', 'pointer')
        .on('click', (e, p: HierarchyRectangularNode<SunburstData>) => clicked(e, p, parent, svg, root, arc, path, label, radius));

      // Labels
      const label = svg
        .append('g')
        .attr('pointer-events', 'none')
        .attr('text-anchor', 'middle')
        .style('user-select', 'none')
        .selectAll('text')
        .data(root.descendants().slice(1))
        .join('text')
        .attr('dy', '0.35em')
        .attr('fill-opacity', (d: ExtendedHierarchyNode) => +labelVisible(d.current))
        .attr('transform', (d: ExtendedHierarchyNode) => labelTransform(d.current, radius))
        .text((d: HierarchyRectangularNode<SunburstData>) => d.data.name);

      // Back button (center circle)
      const parent: d3.Selection<SVGCircleElement, d3.HierarchyRectangularNode<SunburstData>, null, unknown> = svg
        .append('circle')
        .datum(root)
        .attr('r', radius / 2.5)
        .attr('fill', 'rgba(0, 0, 0, 0.1)')
        .attr('pointer-events', 'all')
        .style('cursor', 'pointer')
        .on('mouseover', function () {
          d3.select(this).attr('fill', 'rgba(0, 0, 0, 0.3)');
        })
        .on('mouseout', function () {
          d3.select(this).attr('fill', 'rgba(0, 0, 0, 0.1)');
        })
        .on('click', (e, p: HierarchyRectangularNode<SunburstData>) => clicked(e, p, parent, svg, root, arc, path, label, radius));

      svg
        .append('image')
        .attr('xlink:href', ArrowBack)
        .attr('width', 70)
        .attr('height', 70)
        .attr('x', -35)
        .attr('y', -35)
        .attr('pointer-events', 'none');
    }
  }, [data, height, width]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 1000,
        }}>
        Report from: {formatDate(reportDate ?? '')}
      </span>
      <div style={{ position: 'relative' }}>
        <svg ref={d3Container} width={width} height={height}></svg>
        {tooltip.visible && (
          <div
            style={{
              position: 'absolute',
              top: tooltip.y,
              left: tooltip.x,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '10px',
              pointerEvents: 'none',
              fontSize: '12px',
              maxWidth: '300px',
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
            }}>
            {tooltip.content}
            {tableData.length > 0 && (
              <table
                style={{
                  borderCollapse: 'collapse',
                  width: '100%',
                  marginTop: '5px',
                }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'left',
                      }}>
                      Metric
                    </th>
                    <th
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'right',
                      }}>
                      Covered
                    </th>
                    <th
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'right',
                      }}>
                      Missed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={row.name}>
                      <td
                        style={{
                          borderBottom: index === tableData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                          borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                          padding: '5px',
                          textAlign: 'left',
                        }}>
                        {row.name}
                      </td>
                      <td
                        style={{
                          borderBottom: index === tableData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                          borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                          padding: '5px',
                          textAlign: 'right',
                          color: row.covered > 0 ? 'lightgreen' : 'white',
                          fontWeight: 'bold',
                        }}>
                        {row.covered}
                      </td>
                      <td
                        style={{
                          borderBottom: index === tableData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                          padding: '5px',
                          textAlign: 'right',
                          color: row.missed > 0 ? 'tomato' : 'white',
                          fontWeight: 'bold',
                        }}>
                        {row.missed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

function calculateAggregatedCounters(node: HierarchyRectangularNode<SunburstData>): Counters {
  const aggregated = {
    INSTRUCTION: { covered: 0, missed: 0 },
    LINE: { covered: 0, missed: 0 },
    COMPLEXITY: { covered: 0, missed: 0 },
    METHOD: { covered: 0, missed: 0 },
    CLASS: { covered: 0, missed: 0 },
  };

  // add current node's counters (if present)
  const selfCounters: Counters | undefined = node.data.counters?.[0];
  if (selfCounters) {
    for (const key of METRICS) {
      aggregated[key].covered += selfCounters[key]?.covered ?? 0;
      aggregated[key].missed += selfCounters[key]?.missed ?? 0;
    }
  }

  // recurse into children
  if (node.children) {
    for (const child of node.children) {
      const childAgg: Counters = calculateAggregatedCounters(child);
      for (const key of METRICS) {
        aggregated[key].covered += childAgg[key].covered;
        aggregated[key].missed += childAgg[key].missed;
      }
    }
  }

  return aggregated;
}

// Find the depth-1 ancestor for a node
function topLevelAncestor(n: d3.HierarchyRectangularNode<SunburstData>) {
  while (n.depth > 1 && n.parent) {
    n = n.parent;
  }
  return n;
}

// Compute a lighter shade toward white based on depth.
// topColor: ordinal scale for top-level colors
// maxDepth: deepest depth in the partition
function computeNodeFill(n: d3.HierarchyRectangularNode<SunburstData>, topColor: d3.ScaleOrdinal<string, string>, maxDepth: number) {
  const top: HierarchyRectangularNode<SunburstData> = topLevelAncestor(n);
  const base: string = topColor(top.data.name); // dark base for this branch
  const t: number = maxDepth <= 1 ? 0 : Math.max(0, Math.min(1, (n.depth - 1) / (maxDepth - 1)));
  return d3.interpolateLab(base, '#ffffff')(t * 0.85);
}

// Handle zoom on click.
function clicked(
  event: MouseEvent,
  p: ExtendedHierarchyNode,
  parent: d3.Selection<SVGCircleElement, d3.HierarchyRectangularNode<SunburstData>, null, unknown>,
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  root: d3.HierarchyRectangularNode<SunburstData>,
  arc: d3.Arc<never, { x0: number; y0: number; x1: number; y1: number }>,
  path: d3.Selection<d3.BaseType | SVGPathElement, d3.HierarchyRectangularNode<SunburstData>, SVGGElement, unknown>,
  label: d3.Selection<d3.BaseType | SVGTextElement, d3.HierarchyRectangularNode<SunburstData>, SVGGElement, unknown>,
  radius: number,
) {
  event.stopPropagation();
  parent.datum(p.parent || root);

  root.each(
    (d: ExtendedHierarchyNode) =>
      (d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth),
      }),
  );

  const t = svg.transition().duration(750);

  path
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .transition(t)
    .tween('data', (d: ExtendedHierarchyNode) => {
      if (!d.target || !d.current) return () => null;
      const i = d3.interpolate(d.current, d.target);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return (t: number) => (d.current = i(t));
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .filter(function (d: ExtendedHierarchyNode) {
      if (!d.target) return false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return +this.getAttribute('fill-opacity') || arcVisible(d.target);
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .attr('fill-opacity', (d: ExtendedHierarchyNode) => (arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .attr('pointer-events', (d: ExtendedHierarchyNode) => (arcVisible(d.target) ? 'auto' : 'none'))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .attrTween('d', (d: ExtendedHierarchyNode) => () => arc(d.current));

  label
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .filter(function (d: HierarchyRectangularNode<SunburstData>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return +this.getAttribute('fill-opacity') || labelVisible(d.target);
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .transition(t)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    .attr('fill-opacity', (d: ExtendedHierarchyNode) => +labelVisible(d.target))
    .attrTween('transform', (d: ExtendedHierarchyNode) => () => labelTransform(d.current, radius));
}

function arcVisible(d: ExtendedHierarchyNode | undefined) {
  if (!d) return false;
  return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
}

function labelVisible(d: ExtendedHierarchyNode | undefined) {
  if (!d) return false;
  return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
}

function labelTransform(d: ExtendedHierarchyNode | undefined, radius: number) {
  if (!d) return '';
  const x: number = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
  const y: number = ((d.y0 + d.y1) / 2) * radius;
  return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
}
