const eventMutation = `
    createEvent(event: EventInput!, file: FileUpload!): String,
    cancelEvent(eventId: Int!): String,
    editEvent(eventId: Int!, event: EditEventInput): String
`;

module.exports = { eventMutation };
