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
            response = await axios.get(request_url, {params: {eventId: `${eventId}`}});
            return response.data.data;
        },
        showEvents: async(_, args) => {
            let response = []
            const filter = args.filter;
            const request_url = `${eventsMS_url}/view-all-events`
            response = await axios.get(request_url, {params: {filter: `${filter}`}});
            return response.data.data;
        },
        showEventsByArtist: async(_, args) => {
            let response = []
            const artist = args.artistName;
            const request_url = `${eventsMS_url}/view-my-events`
            response = await axios.get(request_url, {params: {artistName: `${artist}`}});
            return response.data.data;

        }
    },
    Mutation: {
        createEvent: async(_, { event }) => {
            let response = {};
            const request_url = `${eventsMS_url}/create`;
            response = await axios.post(request_url, event);
            return "Response status: " + response.data.status + ", " +
                response.data.message + ", Event: " + event.eventName;
        },
        cancelEvent: async(_, args) => {
            let response = {}
            const eventId = args.eventId;
            const request_url = `${eventsMS_url}/cancel`;
            response = await axios.delete(request_url, {params: {eventId: `${eventId}`}});
            return "Response status: " + response.data.status + ", " +
                response.data.message + ", Event: " + response.data.data;
        },
        editEvent: async(_, { eventId, event }) => {
            let response = {};
            const request_url = `${eventsMS_url}/edit`;
            response = await axios.put(request_url, event, {params: {eventId: `${eventId}`}});
            return "Response status: " + response.data.status + ", " +
                response.data.message + ", Event: " + response.data.data;
        }
    }
};

module.exports = {eventResolver}