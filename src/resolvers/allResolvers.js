const { testResolver } = require("./testResolver");
const { songResolver } = require("./songs/songResolver");

const allResolvers = [testResolver, songResolver];

module.exports = { allResolvers };