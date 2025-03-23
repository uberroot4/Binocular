export interface Commit {
  sha: string;
  shortSha: string;
  messageHeader: string;
  message: string;
  signature: string;
  branch: string;
  date: string;
  parents: string[];
  webUrl: string;
  stats: Stats;
  commitType?: CommitType[];
  timeSpent?: TimeSpent;
}

interface TimeSpent {
  estimated: number;
  actual: number;
}

interface CommitType {
  label: string;
  value: number;
}

interface Stats {
  additions: number;
  deletions: number;
}
