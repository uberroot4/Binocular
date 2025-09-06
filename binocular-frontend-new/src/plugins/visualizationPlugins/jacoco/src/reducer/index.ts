import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataPluginJacocoReport } from '../../../../interfaces/dataPluginInterfaces/dataPluginArtifacts.ts';

export enum DataState {
  EMPTY,
  FETCHING,
  COMPLETE,
}

interface DateRange {
  from: string;
  to: string;
}

export interface JacocoState {
  jacocoReportData: DataPluginJacocoReport[];
  dateRange: DateRange;
  dataState: DataState;
}

const initialState: JacocoState = {
  jacocoReportData: [],
  dateRange: { from: new Date().toISOString(), to: new Date().toISOString() },
  dataState: DataState.EMPTY,
};

export const jacocoSlice = createSlice({
  name: 'jacoco',
  initialState,
  reducers: {
    setJacocoReports: (state, action: PayloadAction<DataPluginJacocoReport[]>) => {
      state.jacocoReportData = action.payload;
    },
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
    setDataState: (state, action: PayloadAction<DataState>) => {
      state.dataState = action.payload;
    },
  },
});

export const { setJacocoReports, setDateRange, setDataState } = jacocoSlice.actions;
export default jacocoSlice.reducer;
