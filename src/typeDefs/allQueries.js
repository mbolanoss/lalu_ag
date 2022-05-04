const { gql } = require('apollo-server-express');
const { playlistMSQueries } = require('./playlists_ms/queries');
const { playlistMSMutations } = require('./playlists_ms/mutations');
const { artistMSQueries } = require('./artists_ms/queries');
const { artistMSMutations } = require('./artists_ms/mutations');

const query = gql`
    type Query {
        ${playlistMSQueries},
        ${artistMSQueries},
    }

    type Mutation {
        ${playlistMSMutations},
        ${artistMSMutations},
    }
`;

module.exports = { query };