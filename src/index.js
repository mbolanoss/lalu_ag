const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await server.listen();
  console.log("Server is running on", url);
}

startApolloServer();
