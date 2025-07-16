import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type XAxisProps = {
  xScale: d3.ScaleTime<number, number>;
};

export const XAxis = ({ xScale }: XAxisProps) => {
  const axisRef = useRef(null);

  // Render the X axis using d3.js, not react
  useEffect(() => {
    const xAxisElement = d3.select(axisRef.current);
    xAxisElement.selectAll('*').remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    xAxisElement.append('g').call(xAxisGenerator);

    // Define zoom behavior
    const zoomBehavior = d3.zoom().on('zoom', handleZoom);

    // Attach zoom behavior to the SVG
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    xAxisElement.call(zoomBehavior);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleZoom(e) {
      const transform = e.transform;
      xScale.domain(transform.rescaleX(xScale).domain());
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      xAxisElement.select('g').call(xAxisGenerator);
    }

    return () => {
      // Cleanup event listeners
      xAxisElement.on('.zoom', null);
    };
  }, [xScale]);

  return <g ref={axisRef} />;
};
