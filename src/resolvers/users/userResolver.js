const { gql } = require("apollo-server");
const { ApolloServer } = require("apollo-server");
const axios = require("axios");
const { parse, stringify } = require("flatted");
const { authMS_url } = require("../../MS_urls");

const userQueryResolvers = {
  viewUser: async (_, args, context) => {
    //We use context to get the token from the request
    try {
      let response = [];
      const request_url = `${authMS_url}/auth/profile`;
      response = await axios.get(request_url, {
        headers: { token: context.req.headers.authorization },
      });
      return response.data;
    } catch (err) {
      console.log("error, returning null");
      return null;
    }
  },
  showUsers: async () => {
    let response = [];
    const request_url = `${authMS_url}/users`;
    response = await axios.get(request_url);
    return response.data;
  },
};

const userMutationResolvers = {
  createUser: async (_, user) => {
    n_user = parse(stringify(user)); //This is to convert the object to string
    try {
      const request_url = `${authMS_url}/users`;
      const response = await axios.post(request_url, n_user.user);
      //console.log(response.newUser);
      return "User created successfully";
    } catch (err) {
      return "User creation failed";
    }
  },

  editUser: async (_, edit_user) => {
    ed_user = parse(stringify(edit_user));
    try {
      const request_url = `${authMS_url}/change_password`;
      const response = await axios.put(request_url, ed_user.edit_user);
      return "User edited successfully";
    } catch (err) {
      return "User edition failed";
    }
  },

  deleteUser: async (_, args) => {
    const id = args.id;
    //console.log(id);
    try {
      const request_url = `${authMS_url}/users/delete_user`;
      const response = await axios.delete(request_url, {
        data: { id: `${id}` },
      });
      return "User deleted successfully";
    } catch (err) {
      console.log("err");
      return "User deletion failed";
    }
  },

  loginUser: async (_, login) => {
    log_user = parse(stringify(login));
    //console.log(log_user.login);
    try {
      const request_url = `${authMS_url}/auth/login`;
      const response = await axios.post(request_url, log_user.login);
      return response.headers.token;
    } catch (err) {
      console.log("err");
      return "User login failed";
    }
  },
};

module.exports = { userMutationResolvers, userQueryResolvers };
