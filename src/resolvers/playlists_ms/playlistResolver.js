const axios = require("axios");
const { playlistsMS_url, songsMS_url } = require("../../MS_urls");

const playlistSongsResolver = async (playlist) => {
  const songList = playlist.playlist_songs;
  try {
    const data = await axios.post(`${songsMS_url}/track/batch`, { idList: songList });
    return data.data.data
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const playlistTypeResolvers = {
  Playlist: { playlist_songs: playlistSongsResolver },
  PlaylistSongsByUserName: { playlist_songs: playlistSongsResolver },
  PlaylistSongsById: { playlist_songs: playlistSongsResolver },

};


const playlistQueryResolvers = {
  getAllPlaylistsAndAlbums: async (_, args) => {
    try {
      const response = await axios.get(`${playlistsMS_url}`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  getAllUsernamePlaylistsAlbums:async (_, args) => {
    const playlist_username = args.playlist_username;
    const requestURL = `${playlistsMS_url}/username/${playlist_username}`;
    try {
      const response = await axios.get(requestURL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  getAllUsernamePlaylists: async (_, args) => {
    const playlist_username = args.playlist_username;
    const requestURL = `${playlistsMS_url}/username/${playlist_username}/playlist`;
    try {
      const response = await axios.get(requestURL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  getUsernamePlaylistByName: async (_, args) => {
    const playlist_username = args.playlist_username;
    const playlist_name = args.playlist_name;
    const requestURL = `${playlistsMS_url}/username/${playlist_username}/${playlist_name}`;
    try {
      const response = await axios.get(requestURL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  getUsernameSongsPlaylistByName: async (_, args) => {
    const playlist_username = args.playlist_username;
    const playlist_name = args.playlist_name;
    const requestURL = `${playlistsMS_url}/username/${playlist_username}/${playlist_name}/songs`;
    try {
      const response = await axios.get(requestURL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  getPlaylistById: async (_, args) => {
    const _id = args._id;
    const requestURL = `${playlistsMS_url}/id/${_id}`;
    try {
      const response = await axios.get(requestURL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  getSongsPlaylistById: async (_, args) => {
    const _id = args._id;
    const requestURL = `${playlistsMS_url}/id/${_id}/songs`;
    try {
      const response = await axios.get(requestURL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

const playlistMutationsResolvers = {
  createPlaylist: async (_, args) => {
    const playlist = args.Playlist;
    try {
      const response = await axios.post(
        `${playlistsMS_url}/newPlaylist`,
        playlist
      );
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  updatePlaylist: async (_, args) => {
    const id = args.id;
    const playlist = args.Playlist;
    try {
      const response = await axios.put(`${playlistsMS_url}/${id}`, playlist);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  updateSongPlaylist: async (_, args) => {
    const playlist_id = args.playlist_id;
    const song_id = args.song_id;
    try {
      const response = await axios.put(
        `${playlistsMS_url}/${playlist_id}/updates/songs/${song_id}`
      );
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  deletePlaylist: async (_, args) => {
    const id = args.id;
    try {
      const response = await axios.delete(`${playlistsMS_url}/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  deleteSongPlaylist: async (_, args) => {
    const playlist_id = args.playlist_id;
    const song_id = args.song_id;
    try {
      const response = await axios.put(
        `${playlistsMS_url}/${playlist_id}/delete/songs/${song_id}`
      );
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

module.exports = { playlistQueryResolvers, playlistMutationsResolvers, playlistTypeResolvers };
