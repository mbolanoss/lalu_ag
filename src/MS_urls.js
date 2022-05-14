const songsMS_ip = "http://lalu-songs-ms";
const songsMS_port = 3003;
const songsMS_url = `${songsMS_ip}:${songsMS_port}`;

const playlistsMS_ip = "http://lalu-playlists-ms";
const playlistsMS_port = 3001;
const playlistsMS_url = `${playlistsMS_ip}:${playlistsMS_port}/lalu/playlists`;

const eventsMS_ip = "http://lalu-events-ms";
const eventsMS_port = 8080;
const eventsMS_url = `${eventsMS_ip}:${eventsMS_port}/events`;

const storageMS_ip = "lalu-storage-ms";
const storageMS_port = 3004;
const storageMS_url = `${storageMS_ip}:${storageMS_port}`;

const profilesMS_ip = "lalu-profiles-ms";
const profilesMS_port = 3002;
const profilesMS_url = `${profilesMS_ip}:${profilesMS_port}`;

const authMS_ip = "http://lalu-auth-ms";
const authMS_port = 3000;
const authMS_url = `${authMS_ip}:${authMS_port}`;

const artistMS_ip = "http://lalu-artists-ms";
const artistMS_port = 3006;
const artistMS_url = `${artistMS_ip}:${artistMS_port}/lalu/artist`;

const queueMS_ip = "http://lalu-mq";
const queueMS_port = 3005;
const queueMS_url = `${queueMS_ip}:${queueMS_port}`;

module.exports = {
  songsMS_url,
  playlistsMS_url,
  eventsMS_url,
  storageMS_url,
  profilesMS_url,
  authMS_url,
  artistMS_url,
  queueMS_url,
};
