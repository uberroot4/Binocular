import { put, takeEvery, fork, call, select } from 'redux-saga/effects';
import {
  DataState,
  setCommits,
  setCommitsFilesConnections,
  setCommitsUsersConnections,
  setDataState,
  setDateRange,
  setFiles,
  setUsers,
  TestFileContributorState,
} from '../reducer';
import { DataPlugin } from '../../../../interfaces/dataPlugin.ts';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { DataPluginUser } from '../../../../interfaces/dataPluginInterfaces/dataPluginUsers.ts';
import { DataPluginCommitsUsersConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';

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
  const state: { plugin: TestFileContributorState } = yield select();
  const commits: DataPluginCommit[] = yield call(() =>
    dataConnection.commits.getAll(state.plugin.dateRange.from, state.plugin.dateRange.to),
  );
  yield put(setCommits(commits));
  const files: DataPluginFile[] = yield call(() => dataConnection.files.getAll());
  yield put(setFiles(files));
  const users: DataPluginUser[] = yield call(() => dataConnection.users.getAll());
  yield put(setUsers(users));
  const commitsFilesConnections: DataPluginCommitsFilesConnection[] = yield call(() =>
    dataConnection.commitsFilesConnections.getAll(state.plugin.dateRange.from, state.plugin.dateRange.to),
  );
  yield put(setCommitsFilesConnections(commitsFilesConnections));
  const commitsUsersConnections: DataPluginCommitsUsersConnection[] = yield call(() =>
    dataConnection.commitsUsersConnections.getAll(state.plugin.dateRange.from, state.plugin.dateRange.to),
  );
  yield put(setCommitsUsersConnections(commitsUsersConnections));
  yield put(setDataState(DataState.COMPLETE));
}
