import { GraphQL, traversePages } from './utils';
import { gql } from '@apollo/client';
import {
  DataPluginCommitsUsersConnection,
  DataPluginCommitsUsersConnections,
} from '../../../interfaces/dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';

export default class CommitsUsersConnections implements DataPluginCommitsUsersConnections {
  private graphQl;

  constructor(endpoint: string) {
    this.graphQl = new GraphQL(endpoint);
  }

  public async getAll(from: string, to: string) {
    console.log(`Getting commits-users connections from ${from} to ${to}`);
    const commitsUsersConnectionsList: DataPluginCommitsUsersConnection[] = [];
    const getCommitsUsersConnectionsPage = (to?: string) => async (page: number, perPage: number) => {
      const resp = await this.graphQl.client.query({
        query: gql`
          query ($page: Int, $perPage: Int, $until: Timestamp) {
            commitsUsersConnections(page: $page, perPage: $perPage, until: $until) {
              count
              page
              perPage
              data {
                _id
                _from
                _to
              }
            }
          }
        `,
        variables: { page, perPage, to },
      });
      return resp.data.commitsUsersConnections;
    };

    await traversePages(getCommitsUsersConnectionsPage(), (commitsUsersConnection: DataPluginCommitsUsersConnection) => {
      commitsUsersConnectionsList.push(commitsUsersConnection);
    });
    return commitsUsersConnectionsList;
  }
}
