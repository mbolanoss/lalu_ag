const axios = require("axios");
const { profilesMS_url } = require("../MS_urls");

const testResolver = {
  Query: {
    profileTest: async (_, args) => {
      axios
        .get(`http://${profilesMS_url}/userConfig`, {
          params: { username: `${args.username}` },
        })
        .then(function (response) {
          // handle success
          return {
            autoplayOn: response.data.autoplayOn,
            downloadRoute: response.data.downloadRoute,
            preferredColor: response.data.preferredColor,
          };
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
};

module.exports = { testResolver };
