const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios");

// ms-canciones
const { songsMS_url, queueMS_url, storageMS_url, artistMS_url, playlistsMS_url } = require("../../MS_urls");

const songResolver = {
    Query: {
        getSongById: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsMS_url}/track/${id}`;
            try {
                const data = await axios.get(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        getSongsByArtist: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsMS_url}/artist/${id}`;
            try {
                const data = await axios.get(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        getPopularSongsByArtist: async(parent, args, context, info) => {
            const id = args.id;
            let limit = args.limit;

            if (limit < 0) {
                limit = 5;
            }

            const requestURL = `${songsMS_url}/artist/popular/${id}?limit=${limit}`;
            try {
                const data = await axios.get(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        getSongsByIdList: async(parent, args, context, info) => {
            const ids = args.ids;
            const requestURL = `${songsMS_url}/track/batch`;
            try {
                const data = await axios.post(requestURL, { idList: ids });
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
    Mutation: {
        createSong: async(parent, args, context, info) => {
            let metadata = false;
            let id = 0;
            const song = args.Song;
            const requestURL = `${songsMS_url}/track/new`;

            try {
                const data = await axios.post(requestURL, song);
                metadata = true;
                id = data.data.data._id;

                let { createReadStream, filename, mimetype, encoding } =
                await args.file;

                const fn = `${data.data.data._id}.mp3`;

                const location = path.join(__dirname, `/public/songs/${fn}`);
                const myfile = createReadStream();

                await myfile.pipe(fs.createWriteStream(location, { mode: 0o755 }));

                const form = new FormData();
                form.append("song", myfile, `${fn}`);
                const request_url = `${queueMS_url}/songs`;

                const response = await axios.post(request_url, form);
                // console.log(response);

                await fs.unlink(location, (err) => {
                    if (err) throw err;
                    console.log("Temp File Cleared");
                });

                // Add to album
                const playlist_id = song.album;
                await axios.put(
                    `${playlistsMS_url}/${playlist_id}/updates/songs/${id}`
                );

                return data.data.data;
            } catch (e) {
                if (metadata) {
                    const requestURL = `${songsMS_url}/track/${id}`;
                    await axios.delete(requestURL);
                }
                console.log(e);
            }
        },
        updateSong: async(parent, args, context, info) => {
            const id = args.id;
            const song = args.Song;
            const requestURL = `${songsMS_url}/track/${id}`;
            try {
                const data = await axios.patch(requestURL, song);
                return data.data.data;
            } catch (e) {
                console.log(e);
            }
        },
        deleteSong: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsMS_url}/track/${id}`;
            try {
                const data = await axios.delete(requestURL);

                const request_url = `${queueMS_url}/songs?fileName=${id}.mp3`;
                await axios.delete(request_url);

                const playlist_id = data.album;
                // Eliminar desde el album
                await axios.put(
                    `${playlistsMS_url}/${playlist_id}/delete/songs/${id}`
                );

                return data.data.data;
            } catch (e) {
                console.log(e);
            }
        },
        likeSong: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsMS_url}/track/like/${id}`;
            try {
                const data = await axios.patch(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        dislikeSong: async(parent, args, context, info) => {
            const id = args.id;
            const requestURL = `${songsMS_url}/track/dislike/${id}`;
            try {
                const data = await axios.patch(requestURL);
                return data.data.data;
            } catch (error) {
                console.log(error);
            }
        },
    }
};

const SongTypeResolvers = {
    Song: {
        artists: async(ctx) => {
            let artists = [];
            const artistIdList = ctx.artists;

            for (let i = 0; i < artistIdList.length; i++) {
                const _id = artistIdList[i];
                const requestURL = `${artistMS_url}/${_id}`;
                try {
                    const response = await axios.get(requestURL);
                    artists.push(response.data.data);
                } catch (error) {
                    throw new Error(error.response.data);
                }
            }
            return artists
        },
        album: async(ctx) => {
            const _id = ctx.album;
            const requestURL = `${playlistsMS_url}/id/${_id}`;
            try {
                const response = await axios.get(requestURL);
                return response.data.data;
            } catch (error) {
                throw new Error(error.response.data);
            }
        }
    }
}

module.exports = { songResolver, SongTypeResolvers };