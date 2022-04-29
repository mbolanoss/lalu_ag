const { userType } = require("./userType");
const { query } = require("./query");
const { songType } = require("./songs/songType");
const { songQuery } = require("./songs/songQuery");

// Add all type defs in this array
const allTypeDefs = [userType, songType, query, songQuery];

module.exports = { allTypeDefs };