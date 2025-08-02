export interface DataPluginUsers {
  getAll: () => Promise<DataPluginUser[]>;
}

export interface DataPluginUser {
  _id: string;
  id: string;
  gitSignature: string;
}
