import { MutableRefObject, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Axis, NumberValue } from 'd3';

type YAxisProps = {
  yScale: d3.ScaleLinear<number, number>;
};

export const YAxis = ({ yScale }: YAxisProps) => {
  const yAxisRef: MutableRefObject<SVGGElement | null> = useRef<SVGGElement | null>(null);

  // Render the Y axis using d3.js, not react
  useEffect(() => {
    const yAxisGenerator: Axis<Date | NumberValue> = d3.axisLeft(yScale);
    if (yAxisRef.current) {
      d3.select<SVGGElement, unknown>(yAxisRef.current).call(yAxisGenerator);
    }
  }, [yScale]);

  return <g ref={yAxisRef} />;
};
