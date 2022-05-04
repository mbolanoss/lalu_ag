const { gql } = require("apollo-server-express");

const songStorageType = gql `
    scalar FileUpload
    
    type FieldReturn {
        url: String!
    }
`;

module.exports = { songStorageType };