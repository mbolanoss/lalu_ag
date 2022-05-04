const { gql } = require('apollo-server-express');

const artistType = gql`
    type Artist{
        _id : String!
        artist_username : String!
        artist_name : String!
        artist_biography: String!
        artist_followers : Int
        artist_albums : [String]
        artist_songs : [String]
        artist_contact_information : [String]
        artist_photo : String
    }
    type ArtistByName {
        _id : String!
        artist_username : String!
        artist_biography: String!
        artist_followers : Int
        artist_albums : [String]
        artist_songs : [String]
        artist_contact_information : [String]
        artist_photo : String
    }

    type ArtistAlbumsByArtistName {
        artist_albums : [String]
    }

    type ArtistSongsByArtistName {
        artist_songs : [String]
    }

    type ArtistInformationByArtistName {
        artist_contact_information : [String]
    }

    type ArtistById {
        artist_username : String!
        artist_name : String!
        artist_description : String
        artist_privacity : Boolean!
        artist_cover : String
        artist_songs : [String]
    }

    type ArtistAlbumsById {
        artist_songs : [String]
    }

    type ArtistSongsById {
        artist_songs : [String]
    }

    type ArtistInformationById {
        artist_songs : [String]
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