const sender = require("../config/emailConfig");
const TicketRepository = require("../respository/ticket-repository");

const sentBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log("Error occured while sending", error);
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.getAll();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const repo = new TicketRepository();
    const response = repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const subscribeEvent = async (payload) => {
  let service = payload.service;
  let data = payload.data;

  switch (service) {
    case "CREATE_TICKET":
      await createNotification(data);
      break;
    case "SEND_BASIC_MAIL":
      await sentBasicEmail(data);
      break;
    default:
      console.log("No valid event received");
  }
};

module.exports = {
  sentBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
  subscribeEvent,
};
