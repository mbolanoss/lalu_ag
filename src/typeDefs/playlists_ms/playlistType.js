const { gql } = require('apollo-server-express');

const playlistType = gql`
    type Playlist {
        _id : String!
        playlist_username : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [String]
    }
`;

module.exports = { playlistType };