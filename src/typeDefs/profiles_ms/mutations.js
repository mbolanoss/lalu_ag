const profilesMSMutations = `
  createUserConfig(username: String!): String,
  updateUserConfig(userConfig: UserConfigInput!): String

  createLikedArtistsList(username: String!): String
  addLikedArtist(username: String!, artistName: String!): String
  deleteLikedArtist(username: String!, artistName: String!): String
`;

module.exports = { profilesMSMutations };
