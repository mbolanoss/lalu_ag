const { gql } = require("apollo-server");

const songType = gql `
  type ArtistOfSong{
    _id : String!
    artist_username : String!
    artist_name : String!
    artist_biography: String!
    artist_followers : Int
  }

  type AlbumOfSong{
    _id : String!
    playlist_username : String!
    playlist_name : String!
    playlist_description : String
    playlist_privacity : Boolean!
    playlist_cover : String
  }

  type Song {
    _id: String!
    title: String!
    duration: Int!
    artists: [ArtistOfSong]!
    tags: [String]!
    album: AlbumOfSong!
    privacy: Boolean!
    credits: [String]!
    releaseDate: String!
    plays: Int!
    likes: Int!
    dislikes: Int!
  }
`;

module.exports = { songType };