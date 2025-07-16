import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type YAxisProps = {
  yScale: d3.ScaleLinear<number, number>;
};

export const YAxis = ({ yScale }: YAxisProps) => {
  const axisRef = useRef<SVGGElement | null>(null);

  // Render the Y axis using d3.js, not react
  useEffect(() => {
    const axisGenerator = d3.axisLeft(yScale);
    if (axisRef.current) {
      d3.select<SVGGElement, unknown>(axisRef.current).call(axisGenerator);
    }
  }, [yScale]);

  return <g ref={axisRef} />;
};
