const { userQuery } = require("./users/userQuery")
const { userMutation } = require("./users/userMutation") 
 
const { eventQuery } = require("./events/eventQuery");
const { eventMutation } = require("./events/eventMutation");

const { gql } = require("apollo-server");
const { profilesMSQueries } = require("./profiles_ms/queries");
const { profilesMSMutations } = require("./profiles_ms/mutations");

const query = gql`
  type Query {
    ${eventQuery}
    ${profilesMSQueries}
    ${userQuery}
  }

  type Mutation {
    ${profilesMSMutations}
    ${eventMutation}
    ${userMutation}
  }
`;

module.exports = { query };