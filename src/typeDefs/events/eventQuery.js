const eventQuery = `
    viewEvent(eventId: Int!): Event,
    showEvents(filter: String!): [Event],
    showEventsByArtist(artistName: String!): [Event]
`;

module.exports = { eventQuery };
