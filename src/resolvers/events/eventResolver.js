const { gql } = require("apollo-server");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
const FormData = require("form-data");
const { eventsMS_url, storageMS_url } = require("../../MS_urls");

const eventQueryResolvers = {
  viewEvent: async (_, args) => {
    // Declare the object that will be returned
    let response = {};
    const eventId = args.eventId;
    const request_url = `${eventsMS_url}/view-event`;
    response = await axios.get(request_url, {
      params: { eventId: `${eventId}` },
    });
    return response.data.data;
  },

  showEvents: async (_, args) => {
    let response = [];
    const filter = args.filter;
    const request_url = `${eventsMS_url}/view-all-events`;
    response = await axios.get(request_url, {
      params: { filter: `${filter}` },
    });
    return response.data.data;
  },

  showEventsByArtist: async (_, args) => {
    let response = [];
    const artist = args.artistName;
    const request_url = `${eventsMS_url}/view-my-events`;
    response = await axios.get(request_url, {
      params: { artistName: `${artist}` },
    });
    return response.data.data;
  },
};

const eventMutationResolvers = {
  createEvent: async (_, { event, file }) => {
    const events_url = `${eventsMS_url}/create`;
    const response_ev = await axios.post(events_url, event);
    let { createReadStream, filename, mimetype, encoding } = await file;

    if (rensponse_ev.data.status == "OK") {
      const location = path.join(__dirname, `/public/images/${filename}`);
      const myfile = createReadStream();

      await myfile.pipe(fs.createWriteStream(location));

      const form = new FormData();
      form.append("file", myfile, `${filename}`);
      //const storage_url = `${local_st}:${storageMS_port}/event-pics`;
      const response_st = await axios.post(
        `http://${storageMS_url}/event-pics`,
        form
      );
      try {
        fs.unlinkSync(location);
        console.log("File removed");
      } catch (error) {
        console.error(error);
      }
      return (
        "Response status: " +
        response_ev.data.status +
        ", " +
        response_ev.data.message +
        ", Event: " +
        event.eventName +
        " \n" +
        `The file has been uploaded: ${filename}`
      );
    } else {
      return (
        "Response status: " +
        response_ev.data.status +
        ", " +
        response_ev.data.message +
        ", Event: " +
        event.eventName +
        " \n" +
        `The file cannot be uploaded: ${filename}`
      );
    }
  },
  cancelEvent: async (_, args) => {
    let response = {};
    const eventId = args.eventId;
    const request_url = `${eventsMS_url}/cancel`;
    response = await axios.delete(request_url, {
      params: { eventId: `${eventId}` },
    });
    return (
      "Response status: " +
      response.data.status +
      ", " +
      response.data.message +
      ", Event: " +
      response.data.data
    );
  },
  editEvent: async (_, { eventId, event }) => {
    let response = {};
    const request_url = `${eventsMS_url}/edit`;
    response = await axios.put(request_url, event, {
      params: { eventId: `${eventId}` },
    });
    return (
      "Response status: " +
      response.data.status +
      ", " +
      response.data.message +
      ", Event: " +
      response.data.data
    );
  },
};

module.exports = { eventMutationResolvers, eventQueryResolvers };
