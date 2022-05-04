const {
  eventMutationResolvers,
  eventQueryResolvers,
} = require("./events/eventResolver");

const allResolvers = {
  Query: {
    ...eventQueryResolvers,
  },
  Mutation: {
    ...eventMutationResolvers,
  },
};

module.exports = { allResolvers };
