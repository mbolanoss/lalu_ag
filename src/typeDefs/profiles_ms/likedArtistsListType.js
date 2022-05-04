const { gql } = require("apollo-server");

const likedArtistsListType = gql`
  type LikedArtistsList {
    username: String!
    artists: [String!]
  }
`;

module.exports = { likedArtistsListType };
