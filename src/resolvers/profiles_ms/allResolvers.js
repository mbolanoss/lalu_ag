const {
  userConfigQueryResolvers,
  userConfigMutationResolvers,
} = require("./userConfigResolvers");

const profilesMSResolvers = {
  userConfigQueryResolvers,
  userConfigMutationResolvers,
};

module.exports = { profilesMSResolvers };
