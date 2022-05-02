const { gql } = require("apollo-server");
const { userQuery } = require("./users/userQuery")
const { userMutation } = require("./users/userMutation")

const query = gql `
  type Query {
    ${userQuery}
  }
  type Mutation {
    ${userMutation}
  }  
`;

module.exports = { query };
