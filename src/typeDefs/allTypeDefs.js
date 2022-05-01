const { userType } = require("./userType");
const { query } = require("./query");
const { songType } = require("./songs/songType");
const { songQuery } = require("./songs/songQuery");
const { songMutation } = require("./songs/songMutation");

// Add all type defs in this array
const allTypeDefs = [userType, songType, query, songQuery, songMutation];

module.exports = { allTypeDefs };