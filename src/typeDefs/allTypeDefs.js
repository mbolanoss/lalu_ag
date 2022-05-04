const { userType } = require("./users/userType");
const { query } = require("./allQueries");

// Add all type defs in this array
const allTypeDefs = [userType, query];

module.exports = { allTypeDefs };
