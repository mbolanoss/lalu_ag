const { gql } = require('apollo-server-express');
const { playlistMSQueries } = require('./playlists_ms/queries');
const { playlistMSMutations } = require('./playlists_ms/mutations')

const query = gql`
    type Query {
        ${ playlistMSQueries }
    }

    type Mutation {
        ${ playlistMSMutations }
    }
`;

module.exports = { query };