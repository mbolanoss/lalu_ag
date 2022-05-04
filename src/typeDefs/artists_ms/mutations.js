const artistMSMutations = `

    createArtist (Artist : ArtistInput!) : Artist
    
    updateArtist (id : String! , Artist : ArtistInput!) : Artist
    updateAlbumsArtist (artist_id :String! , album_id : String!) : Artist
    updateSongsArtist (artist_id :String! , song_id : String!) : Artist
    updateContactInformationArtist (artist_id :String! , contact_information : String!) : Artist
    
    deleteArtist (id : String!) : Artist
    deleteAlbumArtist (artist_id :String! , album_id : String!) : Artist
    deleteSongArtist (artist_id :String! , song_id : String!) : Artist
    deleteContactInformationArtist (artist_id :String! , contact_information : String!) : Artist
`;

module.exports = { artistMSMutations }