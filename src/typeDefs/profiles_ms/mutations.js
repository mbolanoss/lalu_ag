const profilesMSMutations = `
  createUserConfig(username: String!): String,
  updateUserConfig(userConfig: UserConfigInput!): String
`;

module.exports = { profilesMSMutations };
