import { useMemo, useState } from 'react';
import * as d3 from 'd3';
import { TreeMapData } from './chart.tsx';
import { getMaxAmountOfChanges, getTextWidth, truncateTextToWidth } from '../utilities/utilities.ts';
import { HierarchyNode, HierarchyRectangularNode, ScaleQuantize, TreemapLayout } from 'd3';

const PADDING = 5;
const PADDING_RECTANGLE = 3;
const MARGIN = { bottom: 30, left: 10 };
const LEGEND_WIDTH = 60;
const LEGEND_HEIGHT = 20;
const colors: string[] = [
  '#E3F2FD', // 0% - 20%
  '#90CAF9', // 20% - 40%
  '#42A5F5', // 40% - 60%
  '#1976D2', // 60% - 80%
  '#0D47A1', // 80% - 100%
];

type TreeMapProps = {
  width: number;
  height: number;
  data: TreeMapData;
};

export const TreeMap = ({ width, height, data }: TreeMapProps) => {
  const windowWidth: number = window.innerWidth;
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [tableData, setTableData] = useState<{ amountOfChanges: number }[]>([]);
  const hierarchy: HierarchyNode<TreeMapData> = useMemo(() => {
    return d3.hierarchy(data).sum((d: TreeMapData) => d.fileSize);
  }, [data]);
  const maxValue: number = useMemo(() => {
    return getMaxAmountOfChanges(data);
  }, [data]);
  const root: HierarchyRectangularNode<TreeMapData> = useMemo(() => {
    const treeGenerator: TreemapLayout<TreeMapData> = d3
      .treemap<TreeMapData>()
      .size([width, height - MARGIN.bottom])
      .padding(1);
    return treeGenerator(hierarchy);
  }, [hierarchy, width, height]);

  // Create a color scale based on the maximum value
  const colorScale: ScaleQuantize<string> = d3.scaleQuantize<string>().domain([0, maxValue]).range(colors);

  // Create the rectangles and text for each leaf node
  const allShapes = root.leaves().map((leaf: HierarchyRectangularNode<TreeMapData>) => {
    const rectWidth: number = leaf.x1 - leaf.x0;
    const rectHeight: number = leaf.y1 - leaf.y0;
    const amountOfChanges: number = leaf.data.amountOfChanges;
    const availableWidth: number = rectWidth - PADDING_RECTANGLE * 2;
    const displayName: string = truncateTextToWidth(leaf.data.name, availableWidth);

    return (
      <>
        <g
          key={leaf.id}
          onMouseEnter={(e) => {
            setTooltip({
              visible: true,
              content: `${leaf.data.pathName}`,
              x:
                e.clientX + getTextWidth(`${leaf.data.pathName}`) + 20 < windowWidth
                  ? e.clientX + 20
                  : e.clientX - (getTextWidth(`${leaf.data.pathName}`) + 20) - 50,
              y: e.clientY,
            });
            setTableData([{ amountOfChanges: leaf.data.amountOfChanges }]);
          }}
          onMouseMove={(e) => {
            setTooltip((prev: { visible: boolean; content: string; x: number; y: number }) => ({
              ...prev,
              x:
                e.clientX + getTextWidth(`${leaf.data.pathName}`) + 20 < windowWidth
                  ? e.clientX + 20
                  : e.clientX - (getTextWidth(`${leaf.data.pathName}`) + 20) - 50,
              y: e.clientY,
            }));
          }}
          onMouseLeave={() => {
            setTooltip({ visible: false, content: '', x: 0, y: 0 });
          }}>
          {/* Rectangle for the leaf node */}
          <rect
            x={leaf.x0}
            y={leaf.y0}
            width={rectWidth}
            height={rectHeight}
            fill={colorScale(amountOfChanges)}
            className={'opacity-80 hover:opacity-100'}
          />
          {/* File name */}
          {rectWidth > 10 + 2 * PADDING_RECTANGLE && rectHeight > 12 + 2 * PADDING_RECTANGLE && (
            <text
              x={leaf.x0 + PADDING_RECTANGLE}
              y={leaf.y0 + PADDING_RECTANGLE}
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
              y={leaf.y0 + 18}
              fontSize={12}
              textAnchor="start"
              alignmentBaseline="hanging"
              fill="black"
              className="font-light">
              {leaf.data.amountOfChanges}
            </text>
          )}
        </g>
        {/* Legend */}
        <g>
          {colors.map((c: string, i: number) => (
            <g key={'legend ' + i}>
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
      </>
    );
  });

  return (
    <div>
      {/* SVG Container */}
      <svg width={width} height={height}>
        {allShapes}
      </svg>
      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '10px',
            pointerEvents: 'none',
            fontSize: '12px',
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
                      padding: '5px',
                      textAlign: 'left',
                    }}>
                    changes
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={row.amountOfChanges}>
                    <td
                      style={{
                        borderBottom: index === tableData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'left',
                        color: 'white',
                      }}>
                      {row.amountOfChanges}
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
