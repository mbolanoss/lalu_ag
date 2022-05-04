const userMutation = `
    createUser(user: UserInput!): String,
    editUser( edit_user: EditUserInput!): String,
    deleteUser(id: String!): String,
    loginUser(login: LoginInput!): String

`;

module.exports = { userMutation }