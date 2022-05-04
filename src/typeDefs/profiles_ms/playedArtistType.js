const { gql } = require("apollo-server");

const playedArtistType = gql`
  type PlayedArtist {
    name: String!
    reproductions: Int!
  }
`;

module.exports = { playedArtistType };
