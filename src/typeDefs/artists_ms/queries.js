const artistMSQueries = `

    getAllArtists : [Artist]
    getArtistByName (artist_name : String!) : [Artist]
    getArtistByUserName(artist_username : String!) : [Artist]
    getAlbumsOfArtistByName (artist_name : String! ) : ArtistAlbums
    getSongsOfArtistByName (artist_name : String! ) : ArtistSongs
    getContactInformationOfArtistByName (artist_name : String! ) : ArtistInformation
    getArtistById (_id : String! ) : Artist
    getAlbumsArtistById (_id : String! ) : ArtistAlbums
    getSongsArtistById (_id : String! ) : ArtistSongs
    getContactInformationArtistById (_id : String! ):ArtistInformation

`;
module.exports = { artistMSQueries };