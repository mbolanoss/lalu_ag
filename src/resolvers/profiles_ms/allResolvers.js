const {
  userConfigQueryResolvers,
  userConfigMutationResolvers,
} = require("./userConfigResolvers");

const {
  likedArtistsQueryResolvers,
  likedArtistsMutationResolvers,
} = require("./likedArtistsResolvers");

const {
  playedSongsQueryResolvers,
  playedSongsMutationResolvers,
} = require("./playedSongsResolvers");

const profilesMSResolvers = {
  userConfigQueryResolvers,
  userConfigMutationResolvers,
  likedArtistsQueryResolvers,
  likedArtistsMutationResolvers,
  playedSongsQueryResolvers,
  playedSongsMutationResolvers,
};

module.exports = { profilesMSResolvers };
