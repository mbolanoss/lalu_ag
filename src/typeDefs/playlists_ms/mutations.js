const playlistMSMutations = `

    createPlaylist (Playlist : PlaylistInput!) : Playlist

    updatePlaylist (id : String! , Playlist : PlaylistInput!) : Playlist
    updateSongPlaylist (playlist_id :String! , song_id : String!) : Playlist
    
    deletePlaylist (id : String!) : Playlist
    deleteSongPlaylist (playlist_id :String! , song_id : String!) : Playlist
`;

module.exports = { playlistMSMutations }