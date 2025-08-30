import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataPluginFile } from '../../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';
import { DataPluginCommit } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginCommitsFilesConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { DataPluginUser } from '../../../../interfaces/dataPluginInterfaces/dataPluginUsers.ts';
import { DataPluginCommitsUsersConnection } from '../../../../interfaces/dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';

export enum DataState {
  EMPTY,
  FETCHING,
  COMPLETE,
}

interface DateRange {
  from: string;
  to: string;
}

export interface TestFileContributorState {
  commits: DataPluginCommit[];
  files: DataPluginFile[];
  users: DataPluginUser[];
  commitsFilesConnections: DataPluginCommitsFilesConnection[];
  commitsUsersConnections: DataPluginCommitsUsersConnection[];
  dateRange: DateRange;
  dataState: DataState;
}

const initialState: TestFileContributorState = {
  commits: [],
  files: [],
  users: [],
  commitsFilesConnections: [],
  commitsUsersConnections: [],
  dateRange: { from: new Date().toISOString(), to: new Date().toISOString() },
  dataState: DataState.EMPTY,
};

export const changesSlice = createSlice({
  name: 'testFileContributor',
  initialState,
  reducers: {
    setCommits: (state, action: PayloadAction<DataPluginCommit[]>) => {
      state.commits = action.payload;
    },
    setFiles: (state, action: PayloadAction<DataPluginFile[]>) => {
      state.files = action.payload;
    },
    setUsers: (state, action: PayloadAction<DataPluginUser[]>) => {
      state.users = action.payload;
    },
    setCommitsFilesConnections: (state, action: PayloadAction<DataPluginCommitsFilesConnection[]>) => {
      state.commitsFilesConnections = action.payload;
    },
    setCommitsUsersConnections: (state, action: PayloadAction<DataPluginCommitsUsersConnection[]>) => {
      state.commitsUsersConnections = action.payload;
    },
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
    setDataState: (state, action: PayloadAction<DataState>) => {
      state.dataState = action.payload;
    },
  },
});

export const { setCommits, setFiles, setUsers, setCommitsFilesConnections, setCommitsUsersConnections, setDateRange, setDataState } =
  changesSlice.actions;
export default changesSlice.reducer;
