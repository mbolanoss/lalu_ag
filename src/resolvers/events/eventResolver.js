const {gql} = require("apollo-server")
const axios = require("axios");

const local_url = "http://localhost";
const eventsMS_port = "8080";
const storageMS_port = "3000";

const eventsMS_url = `${local_url}:${eventsMS_port}/events`;


const eventResolver = {
    Query: {
        viewEvent: async (_, args) => {
            // Declare the object that will be returned
            let response = {};
            const eventId = args.eventId;
            const request_url = `${eventsMS_url}/view-event`
            try {
                response = await axios.get(request_url, {params: {eventId: `${eventId}`}});

            } catch (error) {
                console.log("We have found an error");
            }

            return response.data.data;
        },
        showEvents: async(_, args) => {
            let response = []
            const filter = args.filter;
            const request_url = `${eventsMS_url}/view-all-events`
            try {
                response = await axios.get(request_url, {params: {filter: `${filter}`}});

            } catch (error) {
                console.log("We have found an error");
            }
            return response.data.data;
        },
        showEventsByArtist: async(_, args) => {
            let response = []
            const artist = args.artistName;
            const request_url = `${eventsMS_url}/view-my-events`
            try {
                response = await axios.get(request_url, {params: {artistName: `${artist}`}});

            } catch (error) {
                console.log("We have found an error");
            }
            return response.data.data;
        }
    }
};

module.exports = {eventResolver}