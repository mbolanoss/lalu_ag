const axios = require("axios");

// ms-canciones
const songsURL = 'http://localhost';
const songsPORT = 3030;

const songResolver = {
    Query: {
        getSongById: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsURL}:${songsPORT}/track/${id}`;
            try {
                const data = await axios.get(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error)
            }
        },
        getSongsByArtist: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsURL}:${songsPORT}/artist/${id}`;
            try {
                const data = await axios.get(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        getPopularSongsByArtist: async(parent, args, context, info) => {
            const id = args.id;
            let limit = args.limit

            if (limit < 0) { limit = 5 };

            const requestURL = `${songsURL}:${songsPORT}/artist/popular/${id}?limit=${limit}`;
            try {
                const data = await axios.get(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createSong: async(parent, args, context, info) => {
            const song = args.Song;
            const requestURL = `${songsURL}:${songsPORT}/track/new`;
            try {
                const data = await axios.post(requestURL, song)
                return data.data.data;
            } catch (e) {
                console.log(e);
            }
        },
        updateSong: async(parent, args, context, info) => {
            const id = args.id;
            const song = args.Song;
            const requestURL = `${songsURL}:${songsPORT}/track/${id}`;
            try {
                const data = await axios.patch(requestURL, song);
                return data.data.data;
            } catch (e) {
                console.log(e);
            }
        },
        deleteSong: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsURL}:${songsPORT}/track/${id}`;
            try {
                const data = await axios.delete(requestURL);
                return data.data.data;
            } catch (e) {
                console.log(e);
            }
        },
        likeSong: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsURL}:${songsPORT}/track/like/${id}}`;
            try {
                const data = await axios.patch(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        dislikeSong: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsURL}:${songsPORT}/track/dislike/${id}}`;
            try {
                const data = await axios.patch(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};

module.exports = { songResolver };