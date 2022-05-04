const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload');

const { finished } = require('stream/promises');

const { allTypeDefs } = require("./typeDefs/allTypeDefs");
const { allResolvers } = require("./resolvers/allResolvers")

const PORT = 5000;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
    context: ({ req }) => ({ req })
  });

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  const { url } = await app.listen({ port: PORT });
  console.log("Server is running on http://localhost:3000/graphql" );
}

startApolloServer();