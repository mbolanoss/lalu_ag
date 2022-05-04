const axios = require("axios");
const { profilesMS_url } = require("../../MS_urls");

const likedArtistsQueryResolvers = {
  getLikedArtistsList: async (_, args) => {
    let body = {};
    try {
      const response = await axios.get(
        `http://${profilesMS_url}/likedArtists`,
        {
          params: {
            username: `${args.username}`,
          },
        }
      );

      body.username = response.data.username;
      body.artists = response.data.artists;
    } catch (error) {
      throw new Error(error.response.data);
    }

    return body;
  },
};

const likedArtistsMutationResolvers = {
  createLikedArtistsList: async (_, args) => {
    let responseStr = "";

    try {
      const response = await axios.post(
        `http://${profilesMS_url}/likedArtists/create`,
        null,
        {
          params: {
            username: `${args.username}`,
          },
        }
      );
      responseStr = response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }

    return responseStr;
  },

  addLikedArtist: async (_, args) => {
    let responseStr = "";

    try {
      const response = await axios.post(
        `http://${profilesMS_url}/likedArtists`,
        null,
        {
          params: {
            username: `${args.username}`,
            artistName: `${args.artistName}`,
          },
        }
      );
      responseStr = response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }

    return responseStr;
  },

  deleteLikedArtist: async (_, args) => {
    let responseStr = "";
    try {
      const response = await axios.delete(
        `http://${profilesMS_url}/likedArtists`,
        {
          params: {
            username: `${args.username}`,
            artistName: `${args.artistName}`,
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

module.exports = { likedArtistsMutationResolvers, likedArtistsQueryResolvers };
