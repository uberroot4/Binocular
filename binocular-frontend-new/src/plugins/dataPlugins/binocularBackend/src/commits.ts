import { GraphQL, traversePages } from './utils';
import { gql } from '@apollo/client';
import { DataPluginCommit, DataPluginCommits } from '../../../interfaces/dataPluginInterfaces/dataPluginCommits.ts';

export default class Commits implements DataPluginCommits {
  private graphQl;

  constructor(endpoint: string) {
    this.graphQl = new GraphQL(endpoint);
  }

  public async getAll(from: string, to: string) {
    console.log(`Getting Commits from ${from} to ${to}`);
    const commitList: DataPluginCommit[] = [];
    const getCommitsPage = (from?: string, to?: string) => async (page: number, perPage: number) => {
      const resp = await this.graphQl.client.query({
        query: gql`
          query ($page: Int, $perPage: Int, $since: Timestamp, $until: Timestamp) {
            commits(page: $page, perPage: $perPage, since: $since, until: $until) {
              count
              page
              perPage
              data {
                sha
                shortSha
                message
                messageHeader
                user {
                  id
                  gitSignature
                }
                branch
                parents
                date
                webUrl
                stats {
                  additions
                  deletions
                }
              }
            }
          }
        `,
        variables: { page, perPage, from, to },
      });
      return resp.data.commits;
    };

    await traversePages(getCommitsPage(from, to), (commit: DataPluginCommit) => {
      commitList.push(commit);
    });
    const allCommits = commitList.sort((a, b) => new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds());
    return allCommits.filter((c) => new Date(c.date) >= new Date(from) && new Date(c.date) <= new Date(to));
  }

  public async getCommitDataWithFilesAndOwnership(commitSpan: [Date, Date], significantSpan: [Date, Date]) {
    const commitList: any[] = [];
    const significantSince = significantSpan[0];
    const significantUntil = significantSpan[1];

    const getCommitsPage = (until: Date) => async (page: number, perPage: number) => {
      const resp = await this.graphQl.client.query({
        query: gql`
          query ($page: Int, $perPage: Int, $until: Timestamp) {
            commits(page: $page, perPage: $perPage, until: $until) {
              count
              page
              perPage
              data {
                sha
                branch
                message
                signature
                webUrl
                date
                parents
                stats {
                  additions
                  deletions
                }
                files {
                  data {
                    file {
                      path
                    }
                    lineCount
                    ownership {
                      user
                      hunks {
                        originalCommit
                        lines {
                          from
                          to
                        }
                      }
                    }
                    stats {
                      additions
                      deletions
                    }
                    hunks {
                      newLines
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { page, perPage, until },
      });
      return resp.data.commits;
    };

    await traversePages(getCommitsPage(significantUntil), (commit: any) => {
      commitList.push(commit);
    });

    const allCommits = commitList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return allCommits.filter((c) => new Date(c.date) >= new Date(significantSince));
  }
}
