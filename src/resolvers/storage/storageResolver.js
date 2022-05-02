const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLUpload } = require("graphql-upload")
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios");

const local_url = "http://127.0.0.1";
const storageMS_port = "3000";

const storageResolver = {
    FileUpload: GraphQLUpload,
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation:{

        addFlyer:async(parent,{file})=>{
            let {createReadStream,filename,mimetype, encoding} = await file;
            const location = path.join(__dirname,`/public/images/${filename}`);
            const myfile = createReadStream();

            await myfile.pipe(fs.createWriteStream(location));

            const form = new FormData();
            form.append('file', myfile, `${filename}`);
            const request_url = `${local_url}:${storageMS_port}/event-pics`;
            const response = await axios.post(request_url, form);

            return {
                url: `The file has been uploaded: ${filename}`
            }
        }
    }
};

module.exports = { storageResolver };