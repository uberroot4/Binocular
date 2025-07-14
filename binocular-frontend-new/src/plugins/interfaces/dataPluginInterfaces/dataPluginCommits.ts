import { DataPluginUser } from './dataPluginUsers.ts';

export interface DataPluginCommits {
  getAll: (from: string, to: string) => Promise<DataPluginCommit[]>;
  getCommitDataWithFilesAndOwnership?: (commitSpan: [Date, Date], significantSpan: [Date, Date]) => Promise<any[]>;
}

export interface DataPluginCommit {
  sha: string;
  shortSha: string;
  messageHeader: string;
  message: string;
  user: DataPluginUser;
  branch: string;
  date: string;
  parents: string[];
  webUrl: string;
  stats: DataPluginStats;
}

export interface DataPluginStats {
  additions: number;
  deletions: number;
}
