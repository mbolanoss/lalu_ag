const axios = require("axios");
const { profilesMS_url } = require("../../MS_urls");

const userConfigQueryResolvers = {
  getUserConfig: async (_, args) => {
    let body = {};

    try {
      const response = await axios.get(`http://${profilesMS_url}/userConfig`, {
        params: { username: `${args.username}` },
      });

      body.autoplayOn = response.data.autoplayOn;
      body.downloadRoute = response.data.downloadRoute;
      body.preferredColor = response.data.preferredColor;
    } catch (error) {
      throw new Error(error.response.data);
    }

    return body;
  },
};

const userConfigMutationResolvers = {
  createUserConfig: async (_, args) => {
    let responseStr = "";

    try {
      const response = await axios.post(`http://${profilesMS_url}/userConfig`, {
        username: args.username,
      });
      responseStr = response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }

    return responseStr;
  },

  updateUserConfig: async (_, args) => {
    let responseStr = "";

    try {
      const response = await axios.put(
        `http://${profilesMS_url}/userConfig`,
        args.userConfig
      );
      responseStr = response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
    return responseStr;
  },

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
};

module.exports = { userConfigQueryResolvers, userConfigMutationResolvers };
