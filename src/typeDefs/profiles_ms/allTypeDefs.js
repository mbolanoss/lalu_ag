const { likedArtistsListType } = require("./likedArtistsListType");
const {
  playedSongsListType,
  addReproductionInput,
} = require("./playedSongsListType");
const { userConfigType, userConfigInput } = require("./userConfigType");
const { playedArtistType } = require("./playedArtistType");

const profilesMSTypeDefs = [
  likedArtistsListType,
  userConfigType,
  playedSongsListType,
  userConfigInput,
  addReproductionInput,
  playedArtistType,
];

module.exports = { profilesMSTypeDefs };
