const { playlistsMSTypeDefs } = require('./playlists_ms/allTypeDefs');
const { artistMSTypeDefs } = require('./artists_ms/allTypeDefs');
const { query } = require('./allQueries');

const allTypeDefs = [playlistsMSTypeDefs, artistMSTypeDefs, query];

module.exports = { allTypeDefs };