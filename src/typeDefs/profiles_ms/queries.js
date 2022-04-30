const profilesMSQueries = `
  getUserConfig(username: String!): UserConfig

  getLikedArtistsList(username: String!): LikedArtistsList
`;

module.exports = { profilesMSQueries };
