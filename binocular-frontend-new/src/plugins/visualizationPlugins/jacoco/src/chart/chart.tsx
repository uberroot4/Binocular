import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { SunburstChart } from './sunburstChart.tsx';
import { JacocoSettings } from '../settings/settings.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { DataState, setDateRange } from '../reducer';
import { createSunburstData } from '../utilities/dataConverter.ts';
import { VisualizationPluginProperties } from '../../../../interfaces/visualizationPluginInterfaces/visualizationPluginProperties.ts';
import { DataPluginJacocoReport } from '../../../../interfaces/dataPluginInterfaces/dataPluginArtifacts.ts';

export type Counters = Record<Metric, MetricCount>;
export type Metric = 'INSTRUCTION' | 'LINE' | 'COMPLEXITY' | 'METHOD';
export interface MetricCount {
  covered: number;
  missed: number;
}

export interface SunburstData {
  name: string;
  counters?: Counters[];
  children?: SunburstData[];
}

function Chart<SettingsType extends JacocoSettings, DataType>(props: VisualizationPluginProperties<SettingsType, DataType>) {
  // * -----------------------------
  // * Creating Dispatch and Root State for interaction with the reducer State
  // * -----------------------------
  type RootState = ReturnType<typeof props.store.getState>;
  type AppDispatch = typeof props.store.dispatch;
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch: AppDispatch = useAppDispatch();
  // * -----------------------------
  // * Redux Global State
  // * -----------------------------
  const jacocoReportData: DataPluginJacocoReport[] = useSelector((state: RootState) => state.plugin.jacocoReportData);
  const dataState: DataState = useSelector((state: RootState) => state.plugin.dataState);
  // * -----------------------------
  // * React Component State
  // * -----------------------------
  const [chartWidth, setChartWidth] = useState(100);
  const [chartHeight, setChartHeight] = useState(100);
  const [chartData, setChartData] = useState<SunburstData>({ name: '', counters: [], children: [] });

  /*
  Throttle the resize of the svg (refresh rate) to every 1s to not overwhelm the renderer,
  This isn't really necessary for this visualization, but for bigger visualization this can be quite essential
   */
  const throttledResize = throttle(
    1000,
    () => {
      if (!props.chartContainerRef.current) return;
      if (props.chartContainerRef.current?.offsetWidth !== chartWidth) {
        setChartWidth(props.chartContainerRef.current.offsetWidth);
      }
      if (props.chartContainerRef.current?.offsetHeight !== chartHeight) {
        setChartHeight(props.chartContainerRef.current.offsetHeight);
      }
    },
    { noLeading: false, noTrailing: false },
  );

  // Resize Observer -> necessary for dynamically refreshing d3 chart
  useEffect(() => {
    if (!props.chartContainerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      throttledResize();
    });
    resizeObserver.observe(props.chartContainerRef.current);
    return () => resizeObserver.disconnect();
  }, [props.chartContainerRef, chartHeight, chartWidth, throttledResize]);

  // Set chartData when data changes
  useEffect(() => {
    const chartData: SunburstData = createSunburstData(jacocoReportData, props.settings.selectedReport);
    setChartData(chartData);
  }, [jacocoReportData, props.settings.selectedReport]);

  // Set DateRange when parameters change
  useEffect(() => {
    dispatch(setDateRange(props.parameters.parametersDateRange));
  }, [dispatch, props.parameters.parametersDateRange]);

  // Trigger Refresh when dataConnection changes
  useEffect(() => {
    dispatch({
      type: 'REFRESH',
    });
  }, [dispatch, props.dataConnection]);

  return (
    <>
      <div className={'w-full h-full flex justify-center items-center'} ref={props.chartContainerRef}>
        {(dataState === DataState.EMPTY || !jacocoReportData) && <div>No data available</div>}
        {dataState === DataState.FETCHING && (
          <div>
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        )}
        {dataState === DataState.COMPLETE && (
          <SunburstChart
            width={chartWidth}
            height={chartHeight}
            data={chartData}
            reportDate={props.settings.selectedReport === 'first' ? jacocoReportData[1].created_at : jacocoReportData[0].created_at}
          />
        )}
      </div>
    </>
  );
}

export default Chart;
