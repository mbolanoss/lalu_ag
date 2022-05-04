const { eventResolver } = require("./events/eventResolver");
const { storageResolver } = require("./storage/storageResolver");

const allResolvers = [eventResolver];

module.exports = { allResolvers };
