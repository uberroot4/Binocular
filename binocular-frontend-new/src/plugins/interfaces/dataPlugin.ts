import { DataPluginGeneral } from './dataPluginInterfaces/dataPluginGeneral.ts';
import { DataPluginCommits } from './dataPluginInterfaces/dataPluginCommits.ts';
import { DataPluginUsers } from './dataPluginInterfaces/dataPluginUsers.ts';
import { DataPluginJacocoReports } from './dataPluginInterfaces/dataPluginArtifacts.ts';
import { DataPluginCommitsFilesConnections } from './dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';
import { DataPluginBuilds } from './dataPluginInterfaces/dataPluginBuilds.ts';
import { DataPluginFiles, FileConfig } from './dataPluginInterfaces/dataPluginFiles.ts';
import { ProgressUpdateConfig } from '../../types/settings/databaseSettingsType.ts';
import { DataPluginBranches } from './dataPluginInterfaces/dataPluginBranches.ts';
import { DataPluginCommitsUsersConnections } from './dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';

export interface DataPlugin {
  name: string;
  description: string;
  general: DataPluginGeneral;
  commits: DataPluginCommits;
  jacocoReports: DataPluginJacocoReports;
  builds: DataPluginBuilds;
  users: DataPluginUsers;
  files: DataPluginFiles;
  branches?: DataPluginBranches;
  capabilities: string[];
  experimental: boolean;
  requirements: { apiKey: boolean; endpoint: boolean; file: boolean; progressUpdate: boolean };
  init: (
    apiKey: string | undefined,
    endpoint: string | undefined,
    fileConfig: FileConfig | undefined,
    progressUpdateConfig: ProgressUpdateConfig | undefined,
  ) => Promise<void>;
  clearRemains: () => Promise<void>;
  commitsFilesConnections: DataPluginCommitsFilesConnections;
  commitsUsersConnections: DataPluginCommitsUsersConnections;
}
