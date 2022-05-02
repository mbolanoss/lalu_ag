const playlistMSQueries = `
    getAllPlaylists : [Playlist]
    getAllUsernamePlaylists (playlist_username : String!) : [Playlist]
    getUsernamePlaylistByName (playlist_username : String! , playlist_name : String! ) : [Playlist]
    getUsernameSongsPlaylistByName (playlist_username : String! , playlist_name : String! ) : [Playlist]


`;
module.exports = { playlistMSQueries };