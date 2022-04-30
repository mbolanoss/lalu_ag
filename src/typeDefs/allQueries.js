const { gql } = require("apollo-server");
const { profilesMSQueries } = require("./profiles_ms/queries")

const query = gql`
  type Query {
    ${profilesMSQueries}
  }
`;

module.exports = { query };
