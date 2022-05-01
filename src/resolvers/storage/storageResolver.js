const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLUpload } = require("graphql-upload")
const fs = require("fs");
const path = require("path");

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
            return {
                url: `The file has been uploaded: ${filename}`
            }
        }
    }
};

module.exports = { storageResolver };