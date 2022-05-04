const { query } = require("./allQueries");
const { eventType } = require("./events/eventType")
const { uploadFileType } = require("./storage/uploadFileType")
const { profilesMSTypeDefs } = require("./profiles_ms/allTypeDefs");

// Add all type defs in this array
const allTypeDefs = [profilesMSTypeDefs, uploadFileType, eventType, query];

module.exports = { allTypeDefs };