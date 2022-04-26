const { userType } = require("./userType");
const { songType } = require("./songType");
const { query } = require("./query");
const { songQuery } = require("./songQuery");

// Add all type defs in this array
const allTypeDefs = [userType, songType, query, songQuery];

module.exports = { allTypeDefs };