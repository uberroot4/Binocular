export interface DataPluginCommitsUsersConnections {
  getAll: (from: string, to: string) => Promise<DataPluginCommitsUsersConnection[]>;
}

export interface DataPluginCommitsUsersConnection {
  _id: string;
  _from: string;
  _to: string;
}
