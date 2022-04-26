const { gql } = require("apollo-server");

const songMutation = gql `
  type Query {
    test: String
  }
`;

module.exports = { songMutation };