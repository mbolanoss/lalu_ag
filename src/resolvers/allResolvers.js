const { songResolver } = require("./songs/songResolver");
const { storageResolver } = require("./songStorage/storageResolver");

const allResolvers = [songResolver, storageResolver];

module.exports = { allResolvers };