const userQuery = `
    viewUser(id: ID!): User,
    showUsers: [User]
`;

module.exports = { userQuery };

