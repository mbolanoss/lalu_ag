const { gql } = require("apollo-server");

const songStorageMutation = gql `
    type Mutation{
        uploadSong(file: FileUpload!): FieldReturn!
    }
`;

// uploadSong es una mutacion de prueba
// Para subir canciones usar createSong

module.exports = { songStorageMutation };