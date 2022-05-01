const { gql } = require("apollo-server-express");
const { eventQuery } = require("./events/eventQuery")
const { eventMutation } = require("./events/eventMutation")
const {uploadFileQuery} = require("./storage/uploadFileQuery");
const {uploadFileMutation} = require("./storage/uploadFileMutation");

const query = gql `
  type Query {
    ${eventQuery},
    ${uploadFileQuery}
  }
  type Mutation {
    ${eventMutation},
    ${uploadFileMutation}
  }  
`;

module.exports = { query };
