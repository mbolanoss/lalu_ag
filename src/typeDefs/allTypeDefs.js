const { profilesMSTypeDefs } = require("./profiles_ms/allTypeDefs");
const { query } = require("./query");

// Add all type defs in this array
const allTypeDefs = [profilesMSTypeDefs, query];

module.exports = { allTypeDefs };
