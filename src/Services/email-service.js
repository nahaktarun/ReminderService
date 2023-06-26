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

module.exports = { sentBasicEmail, fetchPendingEmails, createNotification };
