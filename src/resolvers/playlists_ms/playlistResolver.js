const axios = require('axios');
const {playlistMS_url} = require ('../../MS_urls');

const playlistQueryResolvers = {
    getAllPlaylists : async(_,args) => {
        let body = {};
        try {
            const response = await axios.get(`http://${playlistMS_url}/lalu/playlists`,{
                
            })
        } catch (error) {
            
        }
    }
};