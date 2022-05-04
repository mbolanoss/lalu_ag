const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLUpload } = require("graphql-upload");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios");

const { queueMS_url, storageMS_url } = require("../../MS_urls");

const storageResolver = {
  FileUpload: GraphQLUpload,
  Query: {
    getSongFile: async (parent, args, context, info) => {
      const id = args.id;
      try {
        const request_url = `http://${storageMS_url}/songs?fileName=${id}.mp3`;
        const data = await axios.get(request_url);
        return data.data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  Mutation: {
    uploadSong: async (parent, { file }) => {
      let { createReadStream, filename, mimetype, encoding } = await file;
      filename = "saacostam2.mp3";
      const location = path.join(__dirname, `/public/songs/${filename}`);
      const myfile = createReadStream();

      await myfile.pipe(fs.createWriteStream(location, { mode: 0o755 }));

      const form = new FormData();
      form.append("song", myfile, `${filename}`);
      const request_url = `${queueMS_url}/songs`;

      try {
        const response = await axios.post(request_url, form);
        console.log(response);

        return {
          url: `The file has been uploaded: ${filename}`,
        };
      } catch (e) {
        console.log(e);
      }
    },
  },
};

module.exports = { storageResolver };
