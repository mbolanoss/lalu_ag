const profilesMSQueries = `
  getUserConfig(username: String!): UserConfig

  getLikedArtistsList(username: String!): LikedArtistsList

  getTopPlayedSongs(username: String!, gap: Int!) : PlayedSongsList!

`;

module.exports = { profilesMSQueries };
