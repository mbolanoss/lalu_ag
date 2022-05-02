const {gql} = require("apollo-server")
const axios = require("axios");

const local_url = "http://localhost";
const usersMS_port = "3000";

const usersMS_url = `${local_url}:${usersMS_port}`;

const userResolver = {
    Query: {
        viewUser: async () => {
            // Declare the object that will be returned
            let response = {};
            const request_url = `${usersMS_url}/auth/profile`
            response = await axios.get(request_url);
            return response.data.data;
        },
        showUsers: async() => {
            let response = []
            const request_url = `${usersMS_url}/users`
            response = await axios.get(request_url);
            return response.data.data;
        }
    },
    Mutation: {
        createUser: async(_, args ) => {
            let response = {};
            const request_url = `${usersMS_url}/users`;
            response = await axios.post(request_url, args);
            return "lindo";
            
        },

        editUser: async(_, { edit_user }) => {
            let response = {};
            const request_url = `${usersMS_url}/users/change_password`;
            response = await axios.put(request_url, edit_user);
            return "Response status: " + response.data.status + ", " +
                response.data.message + ", User: " + user.user_name;
        },
        deleteUser: async(_, args) => {
            let response = {}
            const userId = args.userId;
            const request_url = `${usersMS_url}/users/delete_user`;
            response = await axios.delete(request_url, {params: {userId: `${userId}`}});
            return "Response status: " + response.data.status + ", " +
                response.data.message + ", User: " + response.data.data;
        },
        loginUser: async(_, { login }) => {
            let response = {};
            const request_url = `${usersMS_url}/auth/login`;
            response = await axios.post(request_url, login);
            return "Response status: " + response.data.status + ", " +
                response.data.message + ", User: " + response.data.data;
        }
    }
};

module.exports = userResolver;

