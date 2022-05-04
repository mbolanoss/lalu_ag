const {
  eventMutationResolvers,
  eventQueryResolvers,
} = require("./events/eventResolver");

const { profilesMSResolvers } = require("./profiles_ms/allResolvers");

const allResolvers = {
  Query: {
    ...profilesMSResolvers.userConfigQueryResolvers,
    ...profilesMSResolvers.likedArtistsQueryResolvers,
    ...profilesMSResolvers.playedSongsQueryResolvers,
    ...profilesMSResolvers.playedArtistsQueryResolvers,
    
    ...eventQueryResolvers
  },

  Mutation: {
    ...profilesMSResolvers.userConfigMutationResolvers,
    ...profilesMSResolvers.likedArtistsMutationResolvers,
    ...profilesMSResolvers.playedSongsMutationResolvers,
    
    ...eventMutationResolvers
  },
};

module.exports = { allResolvers };
