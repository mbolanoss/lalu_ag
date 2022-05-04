const { gql } = require("apollo-server");

const songQuery = gql `
  type Query {
    getSongById(id: String!): Song
    getSongsByArtist(id: String!): [Song]
    getPopularSongsByArtist(id: String!, limit:Int!): [Song]
    getSongsByIdList(ids: [String!]): [Song]
  }
`;

module.exports = { songQuery };