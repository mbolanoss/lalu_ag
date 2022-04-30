const { likedArtistsListType } = require("./likedArtistsListType");
const { playedSongsListType } = require("./playedSongsListType");
const { userConfigType, userConfigInput } = require("./userConfigType");

const profilesMSTypeDefs = [
  likedArtistsListType,
  userConfigType,
  playedSongsListType,
  userConfigInput,
];

module.exports = { profilesMSTypeDefs };
