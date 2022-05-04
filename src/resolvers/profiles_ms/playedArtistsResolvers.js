const axios = require("axios");
const { profilesMS_url } = require("../../MS_urls");

const playedArtistsQueryResolvers = {
  getTopPlayedArtists: async (_, args) => {
    let rawArtists = {};
    try {
      const response = await axios.get(
        `http://${profilesMS_url}/playedArtists`,
        {
          data: {
            username: `${args.username}`,
            gap: args.gap,
          },
        }
      );

      rawArtists = response.data.artists;
    } catch (error) {
      throw new Error(error.response.data);
    }

    let playedArtistsList = [];

    // Artists names and reproductions get push into the array
    rawArtists.forEach((artist) => {
      playedArtistsList.push({
        name: artist.Key,
        reproductions: artist.Value,
      });
    });

    console.log(playedArtistsList);

    return playedArtistsList;
  },
};

module.exports = { playedArtistsQueryResolvers };
