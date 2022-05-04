const artistMSQueries = `

    getAllArtists : [Artist]
    getArtistByName (artist_name : String!) : [ArtistByName]
    getAlbumsOfArtistByName (artist_name : String! ) : ArtistAlbumsByArtistName
    getSongsOfArtistByName (artist_name : String! ) : ArtistSongsByArtistName
    getContactInformationOfArtistByName (artist_name : String! ) : ArtistInformationByArtistName
    getArtistById (_id : String! ) : ArtistById
    getAlbumsArtistById (_id : String! ) : ArtistAlbumsById
    getSongsArtistById (_id : String! ) : ArtistSongsById
    getContactInformationArtistById (_id : String! ):ArtistInformationById

`;
module.exports = { artistMSQueries };