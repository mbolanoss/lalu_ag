const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { graphqlUploadExpress } = require("graphql-upload");

const { allTypeDefs } = require("./typeDefs/allTypeDefs");
const { allResolvers } = require("./resolvers/allResolvers");

const PORT = 5000;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
  });

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  const { url } = await app.listen({ port: PORT });
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
}

startApolloServer();
