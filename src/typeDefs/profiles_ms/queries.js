const profilesMSQueries = `
  getUserConfig(username: String!): UserConfig

  getLikedArtistsList(username: String!): LikedArtistsList

  getTopPlayedSongs(username: String!, gap: Int!) : PlayedSongsList!

  getTopPlayedArtists(username: String!, gap: Int!) : [PlayedArtist]!

`;

module.exports = { profilesMSQueries };