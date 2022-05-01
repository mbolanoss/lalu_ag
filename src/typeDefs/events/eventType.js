const { gql } = require("apollo-server");

const eventType = gql `
    type Event {
        id: Int
        eventName: String!
        artist: String!
        eventDate: String!
        eventLocation: String!
        eventCity: String!
        eventDescription: String!
        eventCategory: String!
        eventFlyer: String!
        eventOrganizer: String!
        eventState: String!
        eventTicketsURL: String!
    }
    
    input EventInput{
        eventName: String!
        artist: String!
        eventDate: String!
        eventLocation: String!
        eventCity: String!
        eventDescription: String!
        eventCategory: String!
        eventFlyer: String!
        eventOrganizer: String!
        eventState: String!
        eventTicketsURL: String!
    }
    
    input EditEventInput{
        eventName: String!
        eventDate: String!
        eventLocation: String!
        eventCity: String!
        eventDescription: String!
        eventCategory: String!
        eventFlyer: String!
        eventOrganizer: String!
        eventTicketsURL: String!
    }
`;

module.exports = { eventType };
