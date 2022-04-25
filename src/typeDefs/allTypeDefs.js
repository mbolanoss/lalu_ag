const { userType } = require("./userType");
const { query } = require("./query");

// Add all type defs in this array
const allTypeDefs = [userType, query];

module.exports = { allTypeDefs };
