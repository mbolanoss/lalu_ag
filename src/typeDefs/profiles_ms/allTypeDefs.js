const { likedArtistsListType } = require("./likedArtistsListType");
const { playedSongsListType } = require("./playedSongsListType");
const { userConfigType } = require("./userConfigType");

const profilesMSTypeDefs = [likedArtistsListType];

module.exports = { profilesMSTypeDefs };
