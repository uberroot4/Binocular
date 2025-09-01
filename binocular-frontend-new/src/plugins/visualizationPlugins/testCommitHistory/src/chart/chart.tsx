import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { DataState, setDateRange } from '../reducer';
import { createBarCharData } from '../utilities/dataConverter.ts';
import { TestCommitHistorySettings } from '../settings/settings.tsx';
import { VisualizationPluginProperties } from '../../../../interfaces/visualizationPluginInterfaces/visualizationPluginProperties.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { StackedBarChart } from './stackedBarChart.tsx';

export type Group = {
  time: string;
} & { [user: string]: number };

export type TestCommitHistoryChartData = Group[];

function Chart<SettingsType extends TestCommitHistorySettings, DataType>(props: VisualizationPluginProperties<SettingsType, DataType>) {
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
  const commits: DataPluginCommit[] = useSelector((state: RootState) => state.plugin.commits);
  const files: DataPluginFile[] = useSelector((state: RootState) => state.plugin.files);
  const commitsFilesConnections: DataPluginCommitsFilesConnection[] = useSelector(
    (state: RootState) => state.plugin.commitsFilesConnections,
  );
  const dataState: DataState = useSelector((state: RootState) => state.plugin.dataState);
  // * -----------------------------
  // * React Component State
  // * -----------------------------
  const [chartWidth, setChartWidth] = useState(100);
  const [chartHeight, setChartHeight] = useState(100);
  const [chartData, setChartData] = useState<TestCommitHistoryChartData>();

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
    const chartData: TestCommitHistoryChartData = createBarCharData(
      commits,
      files,
      commitsFilesConnections,
      props.parameters,
      props.authorList,
      props.fileList,
    );
    setChartData(chartData);
  }, [commits, files, commitsFilesConnections, props.parameters, props.authorList, props.fileList]);

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
    <div className={'w-full h-full flex justify-center items-center'} ref={props.chartContainerRef}>
      {dataState === DataState.EMPTY && <div>No data available</div>}
      {dataState === DataState.FETCHING && (
        <div>
          <span className="loading loading-spinner loading-lg text-accent"></span>
        </div>
      )}
      {dataState === DataState.COMPLETE && (
        <StackedBarChart
          data={chartData}
          width={chartWidth}
          height={chartHeight}
          dateRange={props.parameters.parametersDateRange}
          authorList={props.authorList}
        />
      )}
    </div>
  );
}

export default Chart;
