import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataPluginFiles } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';

export enum DataState {
  EMPTY,
  FETCHING,
  COMPLETE,
}

interface DateRange {
  from: string;
  to: string;
}

export interface TestCommitHistoryState {
  commits: DataPluginCommit[];
  files: DataPluginFiles[];
  commitsFilesConnections: DataPluginCommitsFilesConnection[];
  dateRange: DateRange;
  dataState: DataState;
}

const initialState: TestCommitHistoryState = {
  commits: [],
  files: [],
  commitsFilesConnections: [],
  dateRange: { from: new Date().toISOString(), to: new Date().toISOString() },
  dataState: DataState.EMPTY,
};

export const testFileChangesSlice = createSlice({
  name: 'testFileChanges',
  initialState,
  reducers: {
    setCommits: (state, action: PayloadAction<DataPluginCommit[]>) => {
      state.commits = action.payload;
    },
    setFiles: (state, action: PayloadAction<DataPluginFiles[]>) => {
      state.files = action.payload;
    },
    setCommitsFilesConnections: (state, action: PayloadAction<DataPluginCommitsFilesConnection[]>) => {
      state.commitsFilesConnections = action.payload;
    },
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
    setDataState: (state, action: PayloadAction<DataState>) => {
      state.dataState = action.payload;
    },
  },
});

export const { setCommits, setFiles, setCommitsFilesConnections, setDateRange, setDataState } = testFileChangesSlice.actions;
export default testFileChangesSlice.reducer;
