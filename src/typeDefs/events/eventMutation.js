const eventMutation = `
    createEvent(event: EventInput!): String,
    cancelEvent(eventId: Int!): String,
    editEvent(eventId: Int!, event: EditEventInput): String
`

module.exports = { eventMutation }