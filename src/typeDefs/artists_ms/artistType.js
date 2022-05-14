const { gql } = require('apollo-server-express');

const artistType = gql`
    type Artist{
        _id : String!
        artist_username : String!
        artist_name : String!
        artist_biography: String!
        artist_followers : Int
        artist_albums : [albumsFromArtist]
        artist_songs : [songFromArtist]
        artist_contact_information : [String]
        artist_photo : String
    }

    type ArtistAlbums {
        artist_albums : [albumsFromArtist]
    }

    type ArtistSongs {
        artist_songs : [songFromArtist]
    }

    type ArtistInformation {
        artist_contact_information : [String]
    }

    type albumsFromArtist {
        _id : String!
        playlist_username : String!
        playlist_name : String!
        playlist_description : String
        playlist_privacity : Boolean!
        playlist_cover : String
        playlist_songs : [String]
    }
    type songFromArtist {
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

const artistInput = gql`
    input ArtistInput {
        artist_username : String!
        artist_name : String!
        artist_biography: String!
        artist_followers : Int
        artist_photo : String
    }

`;



module.exports = { artistType, artistInput };