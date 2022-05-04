const { playlistsMSResolvers } = require('./playlists_ms/allResolvers');
const { artistsMSResolvers } = require('./artists_ms/allResolvers');

const allResolvers = {
    Query: {
        ...playlistsMSResolvers.playlistQueryResolvers,
        ...artistsMSResolvers.artistQueryResolvers,
    },

    Mutation: {
        ...playlistsMSResolvers.playlistMutationsResolvers,
        ...artistsMSResolvers.artistMutationsResolvers,
    },
};

module.exports = { allResolvers };