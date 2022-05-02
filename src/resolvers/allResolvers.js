const { userResolver } = require("./users/userResolver");

const allResolvers = [userResolver];

module.exports = { allResolvers };
