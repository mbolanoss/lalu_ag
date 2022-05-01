const axios = require('axios');
const { playlistMS_url } = require('../../MS_urls');

const playlistQueryResolvers = {
    getAllPlaylists: async (_, args) => {
        let body = {};
        try {
            const response = await axios.get(`http://${playlistMS_url}/lalu/playlists`, {
                params: { playlist_username: `${args.playlist_username}` },
            });

            body.playlist_name = response.data.playlist_name;
            body.playlist_description = response.data.playlist_description;
            body.playlist_privacity = response.data.playlist_privacity;
            body.playlist_cover = response.data.playlist_cover;
            body.playlist_songs = response.data.playlist_songs;
        } catch (error) {
            throw new Error(error.response.data);
        }

        return body;
    }
};

module.exports = { playlistQueryResolvers };