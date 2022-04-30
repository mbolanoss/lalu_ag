const { profilesMSResolvers } = require("./profiles_ms/allResolvers");

const allResolvers = {
  Query: {
    ...profilesMSResolvers.userConfigQueryResolvers,
  },

  Mutation: {
    ...profilesMSResolvers.userConfigMutationResolvers,
  },
};

module.exports = { allResolvers };
