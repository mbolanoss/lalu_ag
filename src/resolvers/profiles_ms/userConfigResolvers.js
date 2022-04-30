const axios = require("axios");
const { profilesMS_url } = require("../../MS_urls");

const userConfigResolvers = {
  getUserConfig: async (_, args) => {
    let body = {};

    try {
      const response = await axios.get(`http://${profilesMS_url}/userConfig`, {
        params: { username: `${args.username}` },
      });

      body.autoplayOn = response.data.autoplayOn;
      body.downloadRoute = response.data.downloadRoute;
      body.preferredColor = response.data.preferredColor;
    } catch (error) {}

    return body;
  },
};

module.exports = { userConfigResolvers };
