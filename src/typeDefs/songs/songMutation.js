const { gql } = require("apollo-server");

const songMutation = gql `
  type Mutation {
    test: String
    createSong(Song: SongInput!, file: FileUpload!):Song
    updateSong(id: String!, Song: SongInput!): Song
    deleteSong(id: String!): Song
    likeSong(id: String!): Song
    dislikeSong(id: String!): Song
  }

  input SongPayload{
    song: SongInput
    id: String!
  }

  input SongInput{
    title: String!
    duration: Int!
    artists: [String]!
    tags: [String]!
    album: String!
    privacy: Boolean!
    credits: [String]!
    releaseDate: String!
  }
`;

module.exports = { songMutation };