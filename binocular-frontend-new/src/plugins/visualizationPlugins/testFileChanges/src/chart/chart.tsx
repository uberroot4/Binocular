import { useEffect, useState } from 'react';
import { TestFileChangesSettings } from '../settings/settings.tsx';
import { throttle } from 'throttle-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { DataState, setDateRange } from '../reducer';
import { TreeMap } from './treeMap.tsx';
import { createTreeMapData } from '../utilities/dataConverter.ts';
import { VisualizationPluginProperties } from '../../../../interfaces/visualizationPluginInterfaces/visualizationPluginProperties.ts';
import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';

export type TreeMapData = {
  type: string;
  name: string;
  pathName: string;
  fileSize: number;
  changes: [{ user: string; amount: number }];
  children: TreeMapData[];
};

function Chart<SettingsType extends TestFileChangesSettings, DataType>(props: VisualizationPluginProperties<SettingsType, DataType>) {
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
  const [chartData, setChartData] = useState<TreeMapData | null>();

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

  // Set chartData when commits, files, or connection change
  useEffect(() => {
    const chartData: TreeMapData | null = createTreeMapData(
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

  //Trigger Refresh when dataConnection changes
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
      {dataState === DataState.COMPLETE && <TreeMap data={chartData!} width={chartWidth} height={chartHeight} />}
    </div>
  );
}

export default Chart;
