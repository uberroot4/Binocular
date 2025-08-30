import { MutableRefObject, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import { TestFileContributorChartData } from './chart.tsx';
import styles from './pie-chart.module.css';
import { Pie, PieArcDatum } from 'd3';

const MARGIN = { top: 30, left: 150 };
const PADDING = 10; // padding around the pie chart

type PieChartProps = {
  width: number;
  height: number;
  data: TestFileContributorChartData[] | undefined;
  commitType: string;
};

export const PieChart = ({ width, height, data, commitType }: PieChartProps) => {
  const ref: MutableRefObject<SVGGElement | null> = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [tableData, setTableData] = useState<{ added: number; deleted: number }[]>([]);
  const radius: number = Math.min(width - 2 * MARGIN.left, height - 2 * MARGIN.top) / 2;

  const pie: PieArcDatum<TestFileContributorChartData>[] = useMemo(() => {
    const pieGenerator: Pie<void, TestFileContributorChartData> = d3
      .pie<void, TestFileContributorChartData>()
      .value((d: TestFileContributorChartData) => d.value.added + d.value.deleted);
    return pieGenerator(data ?? []);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp: PieArcDatum<TestFileContributorChartData>, i: number) => {
    // The first arc is for the Pie
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid: [number, number] = arcGenerator.centroid(sliceInfo);
    const slicePath: string | undefined = arcGenerator(sliceInfo) ?? undefined;

    // The second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius + PADDING,
      outerRadius: radius + PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint: [number, number] = arcGenerator.centroid(inflexionInfo);

    const isRightLabel: boolean = inflexionPoint[0] > 0;
    const labelPosX: number = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor: 'start' | 'end' = isRightLabel ? 'start' : 'end';
    const labelAdded: string = commitType === 'added' ? '(+' + grp.data.value.added + ')' : '';
    const labelDeleted: string = commitType === 'deleted' ? '(-' + grp.data.value.deleted + ')' : '';
    const labelModified: string = commitType === 'modified' ? '(+' + grp.data.value.added + ') (-' + grp.data.value.deleted + ')' : '';
    const label: string = grp.data.name + ' ' + labelAdded + labelDeleted + labelModified;

    return (
      <g
        key={i}
        className={styles.slice}
        onMouseEnter={(e) => {
          if (ref.current) {
            ref.current.classList.add(styles.hasHighlight);
          }
          setTooltip({
            visible: true,
            content: `${grp.data.name}`,
            x: e.clientX,
            y: e.clientY,
          });
          setTableData([{ added: grp.data.value.added, deleted: grp.data.value.deleted }]);
        }}
        onMouseMove={(e) => {
          setTooltip((prev) => ({
            ...prev,
            x: e.clientX,
            y: e.clientY,
          }));
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles.hasHighlight);
          }
          setTooltip({ visible: false, content: '', x: 0, y: 0 });
        }}>
        <path d={slicePath} fill={grp.data.color} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line x1={centroid[0]} y1={centroid[1]} x2={inflexionPoint[0]} y2={inflexionPoint[1]} stroke={'black'} fill={'black'} />
        <line x1={inflexionPoint[0]} y1={inflexionPoint[1]} x2={labelPosX} y2={inflexionPoint[1]} stroke={'black'} fill={'black'} />
        <text x={labelPosX + (isRightLabel ? 2 : -2)} y={inflexionPoint[1]} textAnchor={textAnchor} dominantBaseline="middle" fontSize={14}>
          {label}
        </text>
      </g>
    );
  });

  return (
    <>
      <svg width={width} height={height} style={{ display: 'inline-block' }}>
        <g transform={`translate(${width / 2}, ${height / 2})`} className={styles.container} ref={ref}>
          {shapes}
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
                    Added
                  </th>
                  <th
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                      padding: '5px',
                      textAlign: 'right',
                    }}>
                    Deleted
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={row.added}>
                    <td
                      style={{
                        borderBottom: index === tableData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'left',
                        color: row.added > 0 ? 'limegreen' : 'white',
                      }}>
                      {row.added}
                    </td>
                    <td
                      style={{
                        borderBottom: index === tableData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '5px',
                        textAlign: 'right',
                        color: row.deleted > 0 ? 'tomato' : 'white',
                        fontWeight: 'bold',
                      }}>
                      {row.deleted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};
