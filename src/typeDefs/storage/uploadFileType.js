const { gql } = require("apollo-server-express");

const uploadFileType = gql `
    scalar FileUpload
    
    type FieldUpload {
        url: String!
    }
`;

module.exports = { uploadFileType };