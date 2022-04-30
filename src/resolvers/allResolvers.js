const { profilesMSResolvers } = require("./profiles_ms/allResolvers");

const allResolvers = {
  Query: {
    ...profilesMSResolvers.userConfigQueryResolvers,
    ...profilesMSResolvers.likedArtistsQueryResolvers,
  },

  Mutation: {
    ...profilesMSResolvers.userConfigMutationResolvers,
    ...profilesMSResolvers.likedArtistsMutationResolvers,
  },
};

module.exports = { allResolvers };
