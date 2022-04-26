const axios = require("axios");

// ms-canciones
const songsURL = 'http://localhost';
const songsPORT = 3030;

const songResolver = {
    Query: {
        getSongById: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsURL}:${songsPORT}/track/${id}`;
            const data = await axios.get(requestURL);
            return data.data.data;
        },
    },
};

module.exports = { songResolver };