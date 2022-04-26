const { gql } = require("apollo-server");

const songType = gql `
  type Song {
    title: String!
    duration: Int!
    artists: [String]!
    tags: [String]!
    album: String!
    privacy: Boolean!
    credits: [String]!
    releaseDate: String!
    plays: Int!
    likes: Int!
    dislikes: Int!
  }
`;

module.exports = { songType };