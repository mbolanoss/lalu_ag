const { gql } = require("apollo-server");
const { profilesMSQueries } = require("./profiles_ms/queries");
const { profilesMSMutations } = require("./profiles_ms/mutations");

const query = gql`
  type Query {
    ${profilesMSQueries}
  }

  type Mutation {
    ${profilesMSMutations}
  }
`;

module.exports = { query };
