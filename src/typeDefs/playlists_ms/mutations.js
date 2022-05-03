const playlistMSMutations = `
    createPlaylist (Playlist : PlaylistInput!) : Playlist
    updatePlaylist (Playlist : PlaylistInput!) : Playlist
    deletePlaylist (id : ID!) : String
`;

module.exports = {playlistMSMutations}