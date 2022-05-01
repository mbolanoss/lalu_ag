const { query } = require("./query");
const { eventType } = require("./events/eventType")
const { uploadFileType } = require("./storage/uploadFileType")

// Add all type defs in this array
const allTypeDefs = [eventType, query, uploadFileType];

module.exports = { allTypeDefs };
