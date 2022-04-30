const { gql } = require("apollo-server");

const userConfigType = gql`
  type UserConfig {
    username: String
    autoplayOn: Boolean!
    downloadRoute: String!
    preferredColor: String!
  }
`;

module.exports = { userConfigType };
