const { gql } = require("apollo-server");

const eventType = gql `
    type Event {
        id: Int!
        eventName: String!
        artist: String!
        eventDate: String!
        eventLocation: String!
        eventDescription: String!
        eventCategory: String!
        eventFlyer: String!
        eventOrganizer: String!
        eventStatus: String!
        eventTickersURL: String!
    }
`;

module.exports = { eventType };
