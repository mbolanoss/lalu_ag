const { playlistsMSResolvers } = require('./playlists_ms/allResolvers');

const allResolvers = {
    Query: {
        ...playlistsMSResolvers.playlistQueryResolvers,
    }
};

module.exports = { allResolvers };