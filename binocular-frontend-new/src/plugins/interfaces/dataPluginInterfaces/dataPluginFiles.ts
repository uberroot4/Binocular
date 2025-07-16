export interface DataPluginFiles {
  getAll: () => Promise<DataPluginFile[]>;
}

export interface DataPluginFile {
  _id: string;
  path: string;
  webUrl: string;
  maxLength: number;
}
