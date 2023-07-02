const express = require("express");

const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { createChannel } = require("./utils/messageQueue");
const { sentBasicEmail } = require("./Services/email-service");

const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");

const { subscribeMessage } = require("./utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");
const EmailService = require("./Services/email-service");
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));
  //   const channel = await createChannel();

  app.post("/api/v1/tickets", TicketController.create);

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.testingQueue, REMINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    // jobs();
    // sentBasicEmail(
    //   "support@tarun.com",
    //   "tarunnahak25@gmail.com",
    //   "Hi there",
    //   "How are you?"
    // );
  });
};

setupAndStartServer();
