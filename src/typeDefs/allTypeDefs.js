const { playlistsMSTypeDefs } = require('./playlists_ms/allTypeDefs');
const { query } = require('./allQueries');

const allTypeDefs = [playlistsMSTypeDefs, query];

module.exports = { allTypeDefs };