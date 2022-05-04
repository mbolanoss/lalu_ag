const playlistURL = "http://localhost";
const artistURL = "http://localhost";
//const playlistMS_ip = ""
//const artisttMS_ip = ""
const playlistMS_port = 3001;
const playlistMS_url = `${playlistURL}:${playlistMS_port}/lalu/playlists`

const artistMS_port = 3005;
const artistMS_url = `${artistURL}:${artistMS_port}/lalu/artist`

module.exports = {
    playlistMS_url,
    artistMS_url
};