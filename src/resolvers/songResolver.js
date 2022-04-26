const { axios } = require("axios");

// ms-canciones
const songsURL = 'localhost';
const songsPORT = 3030;

const songResolver = {
    Query: {
        getSongById: async(id) => {
            const data = await axios.get(`${songsURL}:${songsPORT}/track/${id}`);
            return { 'title': 'Without You', 'artists': ['Avicci', 'Sandro Cavazza'] }
        },
    },
};

module.exports = { songResolver };