const {gql} = require("apollo-server");

const userType = gql`
    type User {
        id: Int
        first_name: String!
        second_name: String!
        user_name: String!
        email: String!
        user_password: String!
        confirm_password: String!
        birth: String!
        first_in: String!
    }

    input UserInput{
        first_name: String!
        second_name: String!
        user_name: String!
        email: String!
        user_password: String!
        confirm_password: String!
        birth: String!
    }

    input EditUserInput{
        email: String!
        user_password: String!
        confirm_password: String!
    }

    input LoginInput{
        user_name: String
        email: String
        user_password: String!
    }
`;

module.exports = {userType};