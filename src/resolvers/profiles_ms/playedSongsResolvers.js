const axios = require("axios");
const { profilesMS_url } = require("../../MS_urls");

const playedSongsQueryResolvers = {
  getTopPlayedSongs: async (_, args) => {
    let rawSongs = {};
    try {
      const response = await axios.get(`http://${profilesMS_url}/playedSongs`, {
        data: {
          username: `${args.username}`,
          gap: args.gap,
        },
      });

      rawSongs = response.data.songs;
    } catch (error) {
      throw new Error(error.response.data);
    }

    // Initial propertis are initialized
    let playedSongsList = {};
    playedSongsList.username = args.username;
    playedSongsList.playedSongs = [];

    // Songs ids and reproductions get push into the array
    rawSongs.forEach((song) => {
      playedSongsList.playedSongs.push({
        id: song.Key,
        reproductions: song.Value,
      });
    });

    return playedSongsList;
  },
};

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

  createPlayedSongsList: async (_, args) => {
    let responseStr = "";

    try {
      const response = await axios.post(
        `http://${profilesMS_url}/playedSongs`,
        null,
        {
          params: {
            username: args.username,
          },
        }
      );
      responseStr = response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }

    return responseStr;
  },
};

module.exports = { playedSongsMutationResolvers, playedSongsQueryResolvers };
