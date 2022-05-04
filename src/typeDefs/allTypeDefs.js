const { songType } = require("./songs/songType");
const { songQuery } = require("./songs/songQuery");
const { songMutation } = require("./songs/songMutation");

const { songStorageMutation } = require("./songStorage/songStorageMutation");
const { songStorageQuery } = require("./songStorage/songStorageQuery");
const { songStorageType } = require("./songStorage/songStorageType");  

const { userType } = require("./users/userType");
const { query } = require("./allQueries");
const { eventType } = require("./events/eventType")
const { uploadFileType } = require("./storage/uploadFileType")
const { profilesMSTypeDefs } = require("./profiles_ms/allTypeDefs");
const { playlistsMSTypeDefs } = require('./playlists_ms/allTypeDefs');
const { artistMSTypeDefs } = require('./artists_ms/allTypeDefs');

const songsTypeDefs = [
  songType,
  songQuery,
  songMutation,
  songStorageMutation,
  songStorageQuery,
  songStorageType,
];

// Add all type defs in this array
const allTypeDefs = [userType, profilesMSTypeDefs, uploadFileType, eventType, playlistsMSTypeDefs, artistMSTypeDefs, query, songTypeDefs];

module.exports = { allTypeDefs };