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

const { playedArtistsQueryResolvers } = require("./playedArtistsResolvers");

const profilesMSResolvers = {
  userConfigQueryResolvers,
  userConfigMutationResolvers,

  likedArtistsQueryResolvers,
  likedArtistsMutationResolvers,

  playedSongsQueryResolvers,
  playedSongsMutationResolvers,

  playedArtistsQueryResolvers,
};

module.exports = { profilesMSResolvers };
