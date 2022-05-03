const axios = require('axios');
const { playlistMS_url } = require('../../MS_urls');

const playlistQueryResolvers = {
    getAllPlaylists: async (_, args) => {
        try {
            const response = await axios.get(`${playlistMS_url}`);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getAllUsernamePlaylists :async(_, args) =>{
        const playlist_username = args.playlist_username;
        const requestURL = `${playlistMS_url}/username/${playlist_username}`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getUsernamePlaylistByName : async(_,args) =>{
        const playlist_username = args.playlist_username;
        const playlist_name = args.playlist_name;
        const requestURL = `${playlistMS_url}/username/${playlist_username}/${playlist_name}`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getUsernameSongsPlaylistByName : async(_,args) =>{
        const playlist_username = args.playlist_username;
        const playlist_name = args.playlist_name;
        const requestURL = `${playlistMS_url}/username/${playlist_username}/${playlist_name}/songs`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },

    getPlaylistById :async(_, args) =>{
        const _id = args._id;
        const requestURL = `${playlistMS_url}/id/${_id}`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },

    getSongsPlaylistById : async(_,args) =>{
        const _id = args._id;
        const requestURL = `${playlistMS_url}/id/${_id}/songs`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },

};

const playlistMutationsResolvers = {
    createPlaylist : async(_,args) => {
        const playlist = args.Playlist;
        try {
            const response = await axios.post(
                `${playlistMS_url}/newPlaylist`,
                playlist
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    }

};

module.exports = { playlistQueryResolvers , playlistMutationsResolvers };