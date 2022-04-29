const { gql } = require("apollo-server");

const songMutation = gql `
  type Mutation {
    test: String
  }
`;

module.exports = { songMutation };