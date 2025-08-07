import { put, takeEvery, fork, call, select } from 'redux-saga/effects';
import {
  DataState,
  setCommits,
  setCommitsFilesConnections,
  setDataState,
  setDateRange,
  setFiles,
  TestCommitHistoryState,
} from '../reducer';
import { DataPlugin } from '../../../../interfaces/dataPlugin.ts';
import { DataPluginFiles } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';

export default function* (dataConnection: DataPlugin) {
  yield fork(() => watchRefresh(dataConnection));
  yield fork(() => watchDateRangeChange(dataConnection));
}

function* watchRefresh(dataConnection: DataPlugin) {
  yield takeEvery('REFRESH', () => fetchChangesData(dataConnection));
}

function* watchDateRangeChange(dataConnection: DataPlugin) {
  yield takeEvery(setDateRange, () => fetchChangesData(dataConnection));
}

function* fetchChangesData(dataConnection: DataPlugin) {
  yield put(setDataState(DataState.FETCHING));
  const state: { plugin: TestCommitHistoryState } = yield select();
  const commits: DataPluginCommit[] = yield call(() =>
    dataConnection.commits.getAll(state.plugin.dateRange.from, state.plugin.dateRange.to),
  );
  yield put(setCommits(commits));
  const files: DataPluginFiles[] = yield call(() => dataConnection.files.getAll());
  yield put(setFiles(files));
  const commitsFilesConnections: DataPluginCommitsFilesConnection[] = yield call(() =>
    dataConnection.commitsFilesConnections.getAll(state.plugin.dateRange.from, state.plugin.dateRange.to),
  );
  yield put(setCommitsFilesConnections(commitsFilesConnections));
  yield put(setDataState(DataState.COMPLETE));
}
