const { playlistsMSResolvers } = require('./playlists_ms/allResolvers');

const allResolvers = {
    Query: {
        ...playlistsMSResolvers.playlistQueryResolvers,
    },

    Mutation : {
        ...playlistsMSResolvers.playlistMutationsResolvers,
    },
};

module.exports = { allResolvers };