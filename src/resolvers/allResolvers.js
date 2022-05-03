const { profilesMSResolvers } = require("./profiles_ms/allResolvers");

const allResolvers = {
  Query: {
    ...profilesMSResolvers.userConfigQueryResolvers,
    ...profilesMSResolvers.likedArtistsQueryResolvers,
    ...profilesMSResolvers.playedSongsQueryResolvers,
    ...profilesMSResolvers.playedArtistsQueryResolvers,
  },

  Mutation: {
    ...profilesMSResolvers.userConfigMutationResolvers,
    ...profilesMSResolvers.likedArtistsMutationResolvers,
    ...profilesMSResolvers.playedSongsMutationResolvers,
  },
};

module.exports = { allResolvers };
