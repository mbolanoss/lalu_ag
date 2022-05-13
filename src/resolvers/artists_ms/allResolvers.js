const {
    artistQueryResolvers,
    artistMutationsResolvers,
    artistTypeResolvers,
} = require('./artistResolver');


const artistsMSResolvers = {
    artistQueryResolvers,
    artistMutationsResolvers,
    artistTypeResolvers,
}

module.exports = { artistsMSResolvers };