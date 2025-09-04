import { useState } from 'react';
import * as d3 from 'd3';
import { TreeMapData } from './chart.tsx';
import { getMaxAmountOfChanges, getTextWidth, truncateTextToWidth } from '../utilities/utilities.ts';
import { HierarchyNode, HierarchyRectangularNode, InternMap, ScaleQuantize, TreemapLayout } from 'd3';

const PADDING = 5;
const PADDING_RECTANGLE = 3;
const MARGIN = { top: 30, right: 30, bottom: 30, left: 10 };
const LEGEND_WIDTH = 60;
const LEGEND_HEIGHT = 20;
const colors: string[] = [
  '#E3F2FD', // 0% - 20%
  '#90CAF9', // 20% - 40%
  '#42A5F5', // 40% - 60%
  '#1976D2', // 60% - 80%
  '#0D47A1', // 80% - 100%
];
const windowWidth: number = window.innerWidth;
const groupLabelHeight: number = 20;

type TreeMapProps = {
  width: number;
  height: number;
  data: TreeMapData;
};

export const TreeMap = ({ width, height, data }: TreeMapProps) => {
  // State for handling tooltip
  const [tooltip, setTooltip] = useState({ visible: false, path: '', x: 0, y: 0 });
  const [tableData, setTableData] = useState<{ user: string; amount: number }[]>([]);
  const [tooltipLegend, setTooltipLegend] = useState({ visible: false, amount: 0, x: 0, y: 0 });

  // If no data is provided, early return
  if (!data || data.children.length === 0) {
    return <div>No data available</div>;
  }

  // Create the hierarchy and treemap layout
  const hierarchy: HierarchyNode<TreeMapData> = d3.hierarchy(data).sum((d: TreeMapData) => d.fileSize);
  const maxValue: number = getMaxAmountOfChanges(data);
  const treeGenerator: TreemapLayout<TreeMapData> = d3
    .treemap<TreeMapData>()
    .size([width, height - MARGIN.bottom - groupLabelHeight])
    .padding(2);
  const root: HierarchyRectangularNode<TreeMapData> = treeGenerator(hierarchy);

  // Create a color scale based on the maximum value
  const colorScale: ScaleQuantize<string> = d3.scaleQuantize<string>().domain([0, maxValue]).range(colors);

  // Group shapes by their top-level directory to create borders
  const groupedShapes: InternMap<string, HierarchyRectangularNode<TreeMapData>[]> = d3.group(
    root.leaves(),
    (leaf: HierarchyRectangularNode<TreeMapData>) => leaf.data.pathName.split('/')[0],
  );
  const groupBorders: { group: string; x: number; y: number; width: number; height: number }[] = Array.from(groupedShapes.entries()).map(
    ([group, nodes]: [string, HierarchyRectangularNode<TreeMapData>[]]) => {
      const x0: number = d3.min(nodes, (d: HierarchyRectangularNode<TreeMapData>) => d.x0)!;
      const y0: number = d3.min(nodes, (d: HierarchyRectangularNode<TreeMapData>) => d.y0)!;
      const x1: number = d3.max(nodes, (d: HierarchyRectangularNode<TreeMapData>) => d.x1)!;
      const y1: number = d3.max(nodes, (d: HierarchyRectangularNode<TreeMapData>) => d.y1)!;

      return {
        group,
        x: x0,
        y: y0,
        width: x1 - x0,
        height: y1 - y0,
      };
    },
  );

  // Create the rectangles and text for each leaf node
  const allShapes = root.leaves().map((leaf: HierarchyRectangularNode<TreeMapData>) => {
    const rectWidth: number = leaf.x1 - leaf.x0;
    const rectHeight: number = leaf.y1 - leaf.y0;
    const amountOfChanges: number = leaf.data.changes.reduce(
      (sum: number, change: { user: string; amount: number }) => sum + change.amount,
      0,
    );
    const availableWidth: number = rectWidth - PADDING_RECTANGLE * 2;
    const displayName: string = truncateTextToWidth(leaf.data.name, availableWidth);

    return (
      <>
        <g
          key={leaf.id}
          onMouseEnter={(e) => {
            setTooltip({
              visible: true,
              path: `${leaf.data.pathName}`,
              x:
                e.clientX + getTextWidth(`${leaf.data.pathName}`) + 20 < windowWidth
                  ? e.clientX + 20
                  : e.clientX - (getTextWidth(`${leaf.data.pathName}`) + 20) - 50,
              y: e.clientY,
            });
            const tableData: { user: string; amount: number }[] = [];
            tableData.push(...leaf.data.changes);
            tableData.push({ user: 'Total', amount: amountOfChanges });
            setTableData(tableData);
          }}
          onMouseMove={(e) => {
            setTooltip((prev: { visible: boolean; path: string; x: number; y: number }) => ({
              ...prev,
              x:
                e.clientX + getTextWidth(`${leaf.data.pathName}`) + 20 < windowWidth
                  ? e.clientX + 20
                  : e.clientX - (getTextWidth(`${leaf.data.pathName}`) + 20) - 50,
              y: e.clientY,
            }));
          }}
          onMouseLeave={() => {
            setTooltip({ visible: false, path: '', x: 0, y: 0 });
            setTableData([]);
          }}>
          {/* Rectangle for the leaf node */}
          <rect
            x={leaf.x0}
            y={leaf.y0 + groupLabelHeight}
            width={rectWidth}
            height={rectHeight}
            fill={colorScale(amountOfChanges)}
            className={'opacity-80 hover:opacity-100'}
          />
          {/* File name */}
          {rectWidth > 10 + 2 * PADDING_RECTANGLE && rectHeight > 12 + 2 * PADDING_RECTANGLE && (
            <text
              x={leaf.x0 + PADDING_RECTANGLE}
              y={leaf.y0 + PADDING_RECTANGLE + groupLabelHeight}
              fontSize={12}
              fontFamily={'sans-serif'}
              textAnchor="start"
              alignmentBaseline="hanging"
              fill="black">
              {displayName}
            </text>
          )}
          {/* Number of changes */}
          {rectWidth > 10 + 2 * PADDING_RECTANGLE && rectHeight > 12 * 2 + 2 * PADDING_RECTANGLE && (
            <text
              x={leaf.x0 + PADDING_RECTANGLE}
              y={leaf.y0 + 18 + groupLabelHeight}
              fontSize={12}
              textAnchor="start"
              alignmentBaseline="hanging"
              fill="black"
              className="font-light">
              {leaf.data.changes.reduce((sum: number, change: { user: string; amount: number }) => sum + change.amount, 0)}
            </text>
          )}
        </g>
      </>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {/* Legend */}
        <g>
          {colors.map((c: string, i: number) => (
            <g
              key={'legend ' + i}
              onMouseEnter={(e) => {
                setTooltipLegend({
                  visible: true,
                  amount: (maxValue * (i + 1)) / 5,
                  x: e.clientX,
                  y: e.clientY,
                });
              }}
              onMouseMove={(e) => {
                setTooltipLegend((prev: { visible: boolean; amount: number; x: number; y: number }) => ({
                  ...prev,
                  x: e.clientX,
                  y: e.clientY,
                }));
              }}
              onMouseLeave={() => {
                setTooltipLegend({ visible: false, amount: 0, x: 0, y: 0 });
              }}>
              <rect
                x={MARGIN.left + i * (LEGEND_WIDTH + PADDING)}
                y={height - MARGIN.bottom}
                width={LEGEND_WIDTH}
                height={LEGEND_HEIGHT}
                fill={c}
              />
              <text
                x={MARGIN.left + i * (LEGEND_WIDTH + PADDING) + LEGEND_WIDTH / 2}
                y={height - MARGIN.bottom + LEGEND_HEIGHT / 2 + 1}
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="14">{`≤ ${(i + 1) * 20}%`}</text>
            </g>
          ))}
        </g>
        {allShapes}
        <g className="group-borders">
          {groupBorders.map((group: { group: string; x: number; y: number; width: number; height: number }, i: number) => (
            <g key={'group' + i}>
              {/* Group rectangle border */}
              <rect
                key={'group-border' + i}
                x={group.x}
                y={group.y}
                width={group.width}
                height={group.height + groupLabelHeight}
                stroke="black"
                fill="none"
                strokeWidth={1}
              />
              {/* Group label */}
              {group.width > 10 + 2 * PADDING_RECTANGLE && group.height + groupLabelHeight > 12 && (
                <text
                  key={'group-label' + i}
                  x={group.x + PADDING}
                  y={group.y + PADDING}
                  fontSize={12}
                  fontFamily={'sans-serif'}
                  textAnchor="start"
                  alignmentBaseline="hanging"
                  fill="black">
                  {`${truncateTextToWidth(group.group, group.width - 2 * PADDING_RECTANGLE)}`}
                </text>
              )}
              {/* Bottom border line */}
              <line
                x1={group.x}
                y1={group.y + groupLabelHeight}
                x2={group.x + group.width}
                y2={group.y + groupLabelHeight}
                stroke="black"
                strokeWidth={1}
              />
            </g>
          ))}
        </g>
      </svg>
      {/* Tooltip for legend */}
      {tooltipLegend.visible && (
        <div
          style={{
            position: 'fixed',
            top: tooltipLegend.y - 5,
            left: tooltipLegend.x + 20,
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
          {`≤ ${Math.round(tooltipLegend.amount)} changes`}
        </div>
      )}
      {/* Tooltip for rectangles */}
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
          {tooltip.path}
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
                      borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
                      borderRight: '2px solid rgba(255, 255, 255, 0.5)',
                      padding: '5px',
                      textAlign: 'left',
                    }}>
                    User
                  </th>
                  <th
                    style={{
                      borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
                      padding: '5px',
                      textAlign: 'right',
                    }}>
                    Commits
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row: { user: string; amount: number }, index: number) => (
                  <tr key={row.user}>
                    <td
                      style={{
                        borderBottom:
                          index === tableData.length - 1
                            ? 'none'
                            : index === tableData.length - 2
                              ? '2px solid rgba(255, 255, 255, 0.5)'
                              : '1px solid rgba(255, 255, 255, 0.3)',
                        borderRight: '2px solid rgba(255, 255, 255, 0.5)',
                        padding: '5px',
                        textAlign: 'left',
                        color: 'white',
                      }}>
                      {row.user}
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index === tableData.length - 1
                            ? 'none'
                            : index === tableData.length - 2
                              ? '2px solid rgba(255, 255, 255, 0.5)'
                              : '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'right',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};
