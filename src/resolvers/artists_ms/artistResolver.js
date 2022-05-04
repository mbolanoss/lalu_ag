const axios = require('axios');
const { artistMS_url } = require('../../MS_urls');

const artistQueryResolvers = {
    getAllArtists: async (_, args) => {
        try {
            const response = await axios.get(`${artistMS_url}`);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getArtistByName: async (_, args) => {
        const artist_name = args.artist_name;
        const requestURL = `${artistMS_url}/artistName/${artist_name}`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getAlbumsOfArtistByName: async (_, args) => {
        const artist_name = args.artist_name;
        const requestURL = `${artistMS_url}/artistName/${artist_name}/albums`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getSongsOfArtistByName: async (_, args) => {
        const artist_name = args.artist_name;
        const requestURL = `${artistMS_url}/artistName/${artist_name}/songs`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getContactInformationOfArtistByName: async (_, args) => {
        const artist_name = args.artist_name;
        const requestURL = `${artistMS_url}/artistName/${artist_name}/information`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getArtistById: async (_, args) => {
        const _id = args._id;
        const requestURL = `${artistMS_url}/${_id}`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getAlbumsArtistById: async (_, args) => {
        const _id = args._id;
        const requestURL = `${artistMS_url}/${_id}/albums`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getSongsArtistById: async (_, args) => {
        const _id = args._id;
        const requestURL = `${artistMS_url}/${_id}/songs`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    getContactInformationArtistById: async (_, args) => {
        const _id = args._id;
        const requestURL = `${artistMS_url}/${_id}/information`;
        try {
            const response = await axios.get(requestURL);
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },

};

const artistMutationsResolvers = {
    createArtist: async (_, args) => {
        const artist = args.Artist;
        try {
            const response = await axios.post(
                `${artistMS_url}/newArtist`,
                artist
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    updateArtist: async (_, args) => {
        const id = args.id;
        const artist = args.Artist;
        try {
            const response = await axios.put(
                `${artistMS_url}/${id}`,
                artist
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    updateAlbumsArtist: async (_, args) => {
        const artist_id = args.artist_id;
        const album_id = args.album_id;
        try {
            const response = await axios.put(
                `${artistMS_url}/${artist_id}/updates/albums/${album_id}`,
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    updateSongsArtist: async (_, args) => {
        const artist_id = args.artist_id;
        const song_id = args.song_id;
        try {
            const response = await axios.put(
                `${artistMS_url}/${artist_id}/updates/songs/${song_id}`,
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    updateContactInformationArtist: async (_, args) => {
        const artist_id = args.artist_id;
        const contact_information = args.contact_information;
        try {
            const response = await axios.put(
                `${artistMS_url}/${artist_id}/updates/information/${contact_information}`,
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    deleteArtist: async (_, args) => {
        const id = args.id;
        try {
            const response = await axios.delete(
                `${artistMS_url}/${id}`
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    deleteAlbumArtist: async (_, args) => {
        const artist_id = args.artist_id;
        const album_id = args.album_id;
        try {
            const response = await axios.put(
                `${artistMS_url}/${artist_id}/delete/albums/${album_id}`
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    deleteSongArtist: async (_, args) => {
        const artist_id = args.artist_id;
        const song_id = args.song_id;
        try {
            const response = await axios.put(
                `${artistMS_url}/${artist_id}/delete/songs/${song_id}`
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    deleteContactInformationArtist: async (_, args) => {
        const artist_id = args.artist_id;
        const contact_information = args.contact_information;
        try {
            const response = await axios.put(
                `${artistMS_url}/${artist_id}/delete/information/${contact_information}`
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },


};

module.exports = { artistQueryResolvers, artistMutationsResolvers };