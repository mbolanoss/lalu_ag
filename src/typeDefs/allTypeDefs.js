const { userType } = require("./users/userType");
const { query } = require("./allQueries");
const { eventType } = require("./events/eventType")
const { uploadFileType } = require("./storage/uploadFileType")
const { profilesMSTypeDefs } = require("./profiles_ms/allTypeDefs");
const { playlistsMSTypeDefs } = require('./playlists_ms/allTypeDefs');
const { artistMSTypeDefs } = require('./artists_ms/allTypeDefs');

// Add all type defs in this array
const allTypeDefs = [userType, profilesMSTypeDefs, uploadFileType, eventType, playlistsMSTypeDefs, artistMSTypeDefs, query];

module.exports = { allTypeDefs };