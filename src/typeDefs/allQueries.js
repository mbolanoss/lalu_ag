const { eventQuery } = require("./events/eventQuery");
const { eventMutation } = require("./events/eventMutation");

const { gql } = require("apollo-server");
const { profilesMSQueries } = require("./profiles_ms/queries");
const { profilesMSMutations } = require("./profiles_ms/mutations");

const query = gql`
  type Query {
    ${eventQuery}
    ${profilesMSQueries}
  }

  type Mutation {
    ${profilesMSMutations}
    ${eventMutation}
  }
`;

module.exports = { query };