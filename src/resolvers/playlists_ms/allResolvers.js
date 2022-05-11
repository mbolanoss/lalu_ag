const {
    playlistQueryResolvers,
    playlistMutationsResolvers,
    playlistTypeResolvers

} = require('./playlistResolver');


const playlistsMSResolvers = {
    playlistQueryResolvers,
    playlistMutationsResolvers,
    playlistTypeResolvers,
}

module.exports = { playlistsMSResolvers };