const {
    playlistQueryResolvers,
    playlistMutationsResolvers
} = require('./playlistResolver');


const playlistsMSResolvers = {
    playlistQueryResolvers,
    playlistMutationsResolvers
}

module.exports = { playlistsMSResolvers };