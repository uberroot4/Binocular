import { GraphQL, traversePages } from './utils';
import { gql } from '@apollo/client';
import {
  DataPluginCommitsFilesConnection,
  DataPluginCommitsFilesConnections,
} from '../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';

export default class CommitsFilesConnections implements DataPluginCommitsFilesConnections {
  private graphQl;

  constructor(endpoint: string) {
    this.graphQl = new GraphQL(endpoint);
  }

  public async getAll(from: string, to: string) {
    console.log(`Getting commits-files connections from ${from} to ${to}`);
    const commitsFilesConnectionsList: DataPluginCommitsFilesConnection[] = [];
    const getCommitsFilesConnectionsPage = (to?: string) => async (page: number, perPage: number) => {
      const resp = await this.graphQl.client.query({
        query: gql`
          query ($page: Int, $perPage: Int, $until: Timestamp) {
            commitsFilesConnections(page: $page, perPage: $perPage, until: $until) {
              count
              page
              perPage
              data {
                _from
                _to
                lineCount
                hunks {
                  webUrl
                  newLines
                  newStart
                  oldLines
                  oldStart
                }
                stats {
                  additions
                  deletions
                }
                action
              }
            }
          }
        `,
        variables: { page, perPage, to },
      });
      return resp.data.commitsFilesConnections;
    };

    await traversePages(getCommitsFilesConnectionsPage(), (commitsFilesConnection: DataPluginCommitsFilesConnection) => {
      commitsFilesConnectionsList.push(commitsFilesConnection);
    });
    return commitsFilesConnectionsList;
  }
}
