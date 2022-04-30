const { likedArtistsListType } = require("./likedArtistsListType");
const {
  playedSongsListType,
  addReproductionInput,
} = require("./playedSongsListType");
const { userConfigType, userConfigInput } = require("./userConfigType");

const profilesMSTypeDefs = [
  likedArtistsListType,
  userConfigType,
  playedSongsListType,
  userConfigInput,
  addReproductionInput,
];

module.exports = { profilesMSTypeDefs };
