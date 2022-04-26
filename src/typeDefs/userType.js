const { gql } = require("apollo-server");

const userType = gql `
  type User {
    firstName: String!
    secondName: String!
    userName: String!
    email: String!
    birthDate: String!
  }
`;

module.exports = { userType };