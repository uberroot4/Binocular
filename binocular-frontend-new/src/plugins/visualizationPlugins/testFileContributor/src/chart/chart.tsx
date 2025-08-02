import { RefObject, useEffect, useState } from 'react';
import { DataPlugin } from '../../../../interfaces/dataPlugin.ts';
import { SettingsType } from '../settings/settings.tsx';
import { AuthorType } from '../../../../../types/data/authorType.ts';
import { SprintType } from '../../../../../types/data/sprintType.ts';
import { throttle } from 'throttle-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { ParametersType } from '../../../../../types/parameters/parametersType.ts';
import { Store } from '@reduxjs/toolkit';
import { DataState, setDateRange } from '../reducer';
import { PieChart } from './pieChart.tsx';
import { createPieChartData } from '../utilities/dataConverter.ts';

export interface Lines {
  added: number;
  deleted: number;
}

export interface TestFileContributorChartData {
  name: string;
  value: Lines;
}

function Chart(props: {
  settings: SettingsType;
  dataConnection: DataPlugin;
  authorList: AuthorType[];
  sprintList: SprintType[];
  parameters: ParametersType;
  chartContainerRef: RefObject<HTMLDivElement>;
  store: Store;
}) {
  /*
   * Creating Dispatch and Root State for interaction with the reducer State
   */
  type RootState = ReturnType<typeof props.store.getState>;
  type AppDispatch = typeof props.store.dispatch;
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch: AppDispatch = useAppDispatch();
  /*
   * -----------------------------
   */
  //Redux Global State
  const commits = useSelector((state: RootState) => state.plugin.commits);
  const files = useSelector((state: RootState) => state.plugin.files);
  const users = useSelector((state: RootState) => state.plugin.users);
  const commitsFilesConnections = useSelector((state: RootState) => state.plugin.commitsFilesConnections);
  const commitsUsersConnections = useSelector((state: RootState) => state.plugin.commitsUsersConnections);
  const dataState = useSelector((state: RootState) => state.plugin.dataState);
  //React Component State
  const [chartWidth, setChartWidth] = useState(100);
  const [chartHeight, setChartHeight] = useState(100);
  const [chartData, setChartData] = useState<TestFileContributorChartData[]>();

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

  //Resize Observer -> necessary for dynamically refreshing d3 chart
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
    const chartData: TestFileContributorChartData[] = createPieChartData(
      commits,
      files,
      users,
      commitsFilesConnections,
      commitsUsersConnections,
      props.parameters.parametersGeneral.excludeMergeCommits,
      props.settings.selectedCommitType,
    );
    setChartData(chartData);
  }, [
    commits,
    files,
    users,
    commitsFilesConnections,
    commitsUsersConnections,
    props.parameters.parametersGeneral.excludeMergeCommits,
    props.settings.selectedCommitType,
  ]);

  // Set Global state when parameters change. This will also conclude in a refresh of the data.
  useEffect(() => {
    dispatch(setDateRange(props.parameters.parametersDateRange));
  }, [dispatch, props.parameters]);

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
        <PieChart data={chartData} width={chartWidth} height={chartHeight} commitType={props.settings.selectedCommitType} />
      )}
    </div>
  );
}

export default Chart;
