const { ApolloServer } = require("apollo-server");
const { allTypeDefs } = require("./typeDefs/allTypeDefs");
const { allResolvers } = require("./resolvers/allResolvers");

const PORT = 5000;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
  });

  const { url } = await server.listen({ port: PORT });
  console.log("Server is running on", url);
}

startApolloServer();
