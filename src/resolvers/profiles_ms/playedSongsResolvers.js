const axios = require("axios");
const { profilesMS_url } = require("../../MS_urls");

const playedSongsQueryResolvers = {};

const playedSongsMutationResolvers = {
  addReproduction: async (_, args) => {
    let responseStr = "";

    try {
      const response = await axios.put(
        `http://${profilesMS_url}/playedSongs`,
        args.reproduction
      );
      responseStr = response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
    return responseStr;
  },

  createPlayedSongsList: (_, args) => {},
};

module.exports = { playedSongsMutationResolvers, playedSongsQueryResolvers };
