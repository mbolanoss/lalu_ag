const playlistMS_ip = "http://localhost";
const artistMS_ip = "http://localhost";


const playlistMS_port = 3001;
const playlistMS_url = `${playlistMS_ip}:${playlistMS_port}/lalu/playlists`

const artistMS_port = 3005;
const artistMS_url = `${artistMS_ip}:${artistMS_port}/lalu/artist`

module.exports = {
    playlistMS_url,
    artistMS_url
};