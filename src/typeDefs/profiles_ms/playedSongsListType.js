const { gql } = require("apollo-server");

const playedSongsListTypes = gql`
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

module.exports = { playedSongsListTypes };