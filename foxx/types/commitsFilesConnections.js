'use strict';

const gql = require('graphql-sync');

module.exports = new gql.GraphQLObjectType({
  name: 'CommitsFilesConnections',
  description: 'Connection between commits and files',
  fields() {
    return {
      _from: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'From commit',
      },
      _to: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'To file',
      },
      lineCount: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'The number of lines changed',
      },
      stats: {
        type: require('./stats.js'),
        description: 'Stats of the changes',
      },
      hunks: {
        type: new gql.GraphQLList(require('./hunk.js')),
        description: 'Hunks of the changes',
      },
      action: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The action performed on the file',
      }
    };
  }
});
