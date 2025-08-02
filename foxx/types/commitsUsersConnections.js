'use strict';

const gql = require('graphql-sync');

module.exports = new gql.GraphQLObjectType({
  name: 'CommitsUsersConnections',
  description: 'Connection between commits and users',
  fields() {
    return {
      _id: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Id',
      },
      _from: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'From commit',
      },
      _to: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'To user',
      },
    };
  }
});
