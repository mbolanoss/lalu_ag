const { query } = require("./allQueries");

const { songType } = require("./songs/songType");
const { songQuery } = require("./songs/songQuery");
const { songMutation } = require("./songs/songMutation");

const { songStorageMutation } = require("./songStorage/songStorageMutation");
const { songStorageQuery } = require("./songStorage/songStorageQuery");
const { songStorageType } = require("./songStorage/songStorageType");

// Add all type defs in this array
const allTypeDefs = [
  songType,
  query,
  songQuery,
  songMutation,
  songStorageMutation,
  songStorageQuery,
  songStorageType,
];

module.exports = { allTypeDefs };
