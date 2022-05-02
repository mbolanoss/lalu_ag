const playlistMSQueries = `
    getAllPlaylists : [Playlist]
    getAllUsernamePlaylists (playlist_username : String!) : [PlaylistsByUserName]
    getUsernamePlaylistByName (playlist_username : String! , playlist_name : String! ) : [PlaylistNameByUserName]
    getUsernameSongsPlaylistByName (playlist_username : String! , playlist_name : String! ) : PlaylistSongsByUserName
    getPlaylistById (_id : String! ) : [PlaylistById]


`;
module.exports = { playlistMSQueries };