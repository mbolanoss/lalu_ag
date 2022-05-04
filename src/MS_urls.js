const songsMS_ip = "http://localhost";
const songsMS_port = 3030;
const songsMS_url = `${songsMS_ip}:${songsMS_port}`

const playlistsMS_ip = "http://localhost";
const playlistsMS_port = 3000;
const playlistsMS_url = `${playlistsMS_ip}:${playlistsMS_port}`

const eventsMS_ip = "http://localhost";
const eventsMS_port = 8080;
const eventsMS_url = `${eventsMS_ip}:${eventsMS_port}`

const storageMS_ip = "http://localhost";
const storageMS_port = 3004;
const storageMS_url = `${storageMS_ip}:${storageMS_port}`

const profilesMS_ip = "http://localhost";
const profilesMS_port = 3000;
const profilesMS_url = `${profilesMS_ip}:${profilesMS_port}`

const authMS_ip = "http://localhost";
const authMS_port = 0;
const authMS_url = `${authMS_ip}:${authMS_port}`

const queueMS_ip = "http://localhost";
const queueMS_port = 3004;
const queueMS_url = `${queueMS_ip}:${queueMS_port}`;

module.exports = {
    songsMS_url,
    playlistsMS_url,
    eventsMS_url,
    storageMS_url,
    profilesMS_url,
    authMS_url,
    queueMS_url
};