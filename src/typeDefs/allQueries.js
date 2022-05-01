const { gql } = require('apollo-server-express');
const { playlistMSQueries } = require('./playlists_ms/queries');

const query = gql`
    type Query {
        ${ playlistMSQueries }
    }
`;

module.exports = { query };