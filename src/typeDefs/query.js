const { gql } = require("apollo-server");
const { eventQuery } = require("./events/eventQuery")

const query = gql `
  type Query {
    ${eventQuery}
  }
`;

module.exports = { query };
