const { query } = require("./query");
const { eventType } = require("./events/eventType")

// Add all type defs in this array
const allTypeDefs = [eventType, query];

module.exports = { allTypeDefs };
