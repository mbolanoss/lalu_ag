const { gql } = require('apollo-server-express');

const playlistType = gql`
    type Playlist {
        id : ID
        playlist_username : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [ObjectId]
    }
`;

module.exports = { playlistType };