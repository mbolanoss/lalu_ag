const { userQuery } = require("./users/userQuery")
const { userMutation } = require("./users/userMutation") 
 
const { eventQuery } = require("./events/eventQuery");
const { eventMutation } = require("./events/eventMutation");

const { gql } = require("apollo-server");
const { profilesMSQueries } = require("./profiles_ms/queries");
const { profilesMSMutations } = require("./profiles_ms/mutations");

const { playlistMSQueries } = require('./playlists_ms/queries');
const { playlistMSMutations } = require('./playlists_ms/mutations');
const { artistMSQueries } = require('./artists_ms/queries');
const { artistMSMutations } = require('./artists_ms/mutations');

const query = gql`
  type Query {
    ${eventQuery}
    ${profilesMSQueries}
    ${userQuery}
    ${playlistMSQueries}
    ${artistMSQueries}
  }

  type Mutation {
    ${profilesMSMutations}
    ${eventMutation}
    ${userMutation}
    ${playlistMSMutations}
    ${artistMSMutations}
  }
`;

module.exports = { query };