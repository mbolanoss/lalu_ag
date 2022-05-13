const playlistMSQueries = `

    getAllPlaylistsAndAlbums : [Playlist]
    getAllUsernamePlaylistsAlbums (playlist_username : String!) : [Playlist]
    getAllUsernamePlaylists (playlist_username : String!) : [Playlist]
    getUsernamePlaylistByName (playlist_username : String! , playlist_name : String! ) : [Playlist]
    getUsernameSongsPlaylistByName (playlist_username : String! , playlist_name : String! ) : PlaylistSongsByUserName
    getPlaylistById (_id : String! ) : Playlist
    getSongsPlaylistById(_id :String !) :PlaylistSongsById


`;
module.exports = { playlistMSQueries };