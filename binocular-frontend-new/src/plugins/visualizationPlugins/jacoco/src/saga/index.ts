import { put, takeEvery, fork, call, select } from 'redux-saga/effects';
import { DataState, JacocoState, setDataState, setDateRange, setJacocoReports } from '../reducer';
import { DataPlugin } from '../../../../interfaces/dataPlugin.ts';
import { DataPluginJacocoReport } from '../../../../interfaces/dataPluginInterfaces/dataPluginArtifacts.ts';

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
  const state: { plugin: JacocoState } = yield select();
  const jacocoReportData: DataPluginJacocoReport[] = yield call(() =>
    dataConnection.jacocoReports.getAll(state.plugin.dateRange.from, state.plugin.dateRange.to, 'DESC'),
  );
  if (!jacocoReportData || jacocoReportData.length === 0) {
    yield put(setDataState(DataState.EMPTY));
    return;
  }
  yield put(setJacocoReports(jacocoReportData));
  yield put(setDataState(DataState.COMPLETE));
}
