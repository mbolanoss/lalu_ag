const { testResolver } = require("./testResolver");
const { songResolver } = require("./songResolver");

const allResolvers = [testResolver, songResolver];

module.exports = { allResolvers };