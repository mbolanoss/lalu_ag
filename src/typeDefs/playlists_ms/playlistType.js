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

    type PlaylistsByUserName {
        _id : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [String]
    }

    type PlaylistNameByUserName {
        _id : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [String]
    }

    type PlaylistSongsByUserName {
        playlist_songs : [String]
    }

    type PlaylistById {
        playlist_username : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [String]
    }
`;

module.exports = { playlistType };