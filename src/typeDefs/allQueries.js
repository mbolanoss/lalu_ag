const { gql } = require("apollo-server");

const query = gql `
  type Query {
    test: String
  }
`;

module.exports = { query };