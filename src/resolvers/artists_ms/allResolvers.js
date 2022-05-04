const {
    artistQueryResolvers,
    artistMutationsResolvers,
} = require('./artistResolver');


const artistsMSResolvers = {
    artistQueryResolvers,
    artistMutationsResolvers,
}

module.exports = { artistsMSResolvers };