import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type XAxisProps = {
  xScale: d3.ScaleTime<number, number>;
};

export const XAxis = ({ xScale }: XAxisProps) => {
  const xAxisRef = useRef<SVGGElement | null>(null);

  // Render the X axis using d3.js, not react
  useEffect(() => {
    const xAxisGenerator = d3.axisBottom(xScale);
    if (xAxisRef.current) {
      d3.select<SVGGElement, unknown>(xAxisRef.current).call(xAxisGenerator);
    }
  }, [xScale]);

  return <g ref={xAxisRef} />;
};
