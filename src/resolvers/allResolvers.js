const { playlistsMSResolvers } = require('./playlists_ms/allResolvers');
const { artistsMSResolvers } = require('./artists_ms/allResolvers');
  
const {
  eventMutationResolvers,
  eventQueryResolvers,
} = require("./events/eventResolver");

const {
  userQueryResolvers,
  userMutationResolvers,
} = require("./users/userResolver");

const { profilesMSResolvers } = require("./profiles_ms/allResolvers");
const { GraphQLUpload } = require("graphql-upload");

const allResolvers = {
  FileUpload: GraphQLUpload,
  Query: {
    ...profilesMSResolvers.userConfigQueryResolvers,
    ...profilesMSResolvers.likedArtistsQueryResolvers,
    ...profilesMSResolvers.playedSongsQueryResolvers,
    ...profilesMSResolvers.playedArtistsQueryResolvers,

    ...eventQueryResolvers,

    ...userQueryResolvers,
    
    ...playlistsMSResolvers.playlistQueryResolvers,
    ...artistsMSResolvers.artistQueryResolvers,
  },

  Mutation: {
    ...profilesMSResolvers.userConfigMutationResolvers,
    ...profilesMSResolvers.likedArtistsMutationResolvers,
    ...profilesMSResolvers.playedSongsMutationResolvers,

    ...eventMutationResolvers,

    ...userMutationResolvers,
    
    ...playlistsMSResolvers.playlistMutationsResolvers,
    ...artistsMSResolvers.artistMutationsResolvers,
  },
};

module.exports = { allResolvers };