export interface DataPluginCommitsFilesConnections {
  getAll: (from: string, to: string) => Promise<DataPluginCommitsFilesConnection[]>;
}

export interface DataPluginCommitsFilesConnection {
  _from: string;
  _to: string;
  lineCount: number;
  hunks: ChangeHunk[];
  stats: Stats;
  action: string;
}

interface ChangeHunk {
  newLines: number;
  newStart: number;
  oldLines: number;
  oldStart: number;
  webUrl: string;
}

interface Stats {
  additions: number;
  deletions: number;
}
