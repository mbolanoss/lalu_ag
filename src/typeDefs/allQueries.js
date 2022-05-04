const { gql } = require("apollo-server-express");
const { eventQuery } = require("./events/eventQuery");
const { eventMutation } = require("./events/eventMutation");

const allQueries = gql `
  type Query {
    ${eventQuery}
  }
  type Mutation {
    ${eventMutation}
  }  
`;

module.exports = { query: allQueries };
