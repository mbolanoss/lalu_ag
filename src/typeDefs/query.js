const { gql } = require("apollo-server");
const { eventQuery } = require("./events/eventQuery")
const { eventMutation } = require("./events/eventMutation")

const query = gql `
  type Query {
    ${eventQuery}
  }
  type Mutation {
    ${eventMutation}
  }  
`;

module.exports = { query };
