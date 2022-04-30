const {
  userConfigQueryResolvers,
  userConfigMutationResolvers,
} = require("./userConfigResolvers");

const {
  likedArtistsQueryResolvers,
  likedArtistsMutationResolvers,
} = require("./likedArtistsResolvers");

const profilesMSResolvers = {
  userConfigQueryResolvers,
  userConfigMutationResolvers,
  likedArtistsQueryResolvers,
  likedArtistsMutationResolvers,
};

module.exports = { profilesMSResolvers };
