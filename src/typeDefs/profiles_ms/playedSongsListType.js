const { gql } = require("apollo-server");

const playedSongsListType = gql`
  type PlayedSongsList {
    username: String!
    playedSongs: [PlayedSong!]
  }

  type PlayedSong {
    #Song id
    id: Int
    reproductions: Int
    artistName: String
  }
`;

const addReproductionInput = gql`
  input AddReproductionInput {
    username: String!
    songId: Int!
    artistName: String!
  }
`;

module.exports = { playedSongsListType, addReproductionInput };
