const { gql } = require('apollo-server-express');

const playlistType = gql`
    type Playlist {
        _id : String!
        playlist_username : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [songFromPlaylist]
    }

    type PlaylistSongsByUserName {
        playlist_songs : [songFromPlaylist]
    }

    type PlaylistSongsById {
        playlist_songs : [songFromPlaylist]
    }
    
    type songFromPlaylist {
        _id: String!
        title: String!
        duration: Int!
        artists: [String]!
        tags: [String]!
        album: String!
        privacy: Boolean!
        credits: [String]!
        releaseDate: String!
        plays: Int!
        likes: Int!
        dislikes: Int!
    }
`;

const playlistInput = gql`
    input PlaylistInput {
        playlist_username : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
    }

`;



module.exports = { playlistType, playlistInput };