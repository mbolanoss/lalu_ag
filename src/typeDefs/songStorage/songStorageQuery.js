const { gql } = require("apollo-server");

const songStorageQuery = gql `
    type Query{
        getSongFile(id: String!): String!
    }
`;

module.exports = { songStorageQuery };