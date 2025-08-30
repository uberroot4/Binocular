import Commits from './commits.ts';
import { DataPlugin } from '../../../interfaces/dataPlugin.ts';
import Users from './users.ts';
import General from './general.ts';
import Files from './files.ts';
import Builds from './builds.ts';
import Branches from './branches.ts';
import CommitsFilesConnections from './commitsFilesConnections.ts';
import CommitsUsersConnections from './commitsUsersConnections.ts';
import JacocoReports from './jacocoReports.ts';

class MockData implements DataPlugin {
  public name = 'Mock Data';
  public description = 'Mocked Data for testing purposes.';
  public capabilities = ['authors', 'commits', 'files'];
  public experimental = false;
  public requirements = {
    apiKey: false,
    endpoint: false,
    file: false,
    progressUpdate: false,
  };
  public commits;
  public builds;
  public users;
  public general;
  public files;
  public branches;
  public jacocoReports;
  public commitsFilesConnections;
  public commitsUsersConnections;

  constructor() {
    this.commits = new Commits();
    this.builds = new Builds();
    this.users = new Users();
    this.general = new General();
    this.files = new Files();
    this.branches = new Branches();
    this.jacocoReports = new JacocoReports();
    this.commitsFilesConnections = new CommitsFilesConnections();
    this.commitsUsersConnections = new CommitsUsersConnections();
  }

  public async init() {}

  public async clearRemains() {}
}

export default MockData;
