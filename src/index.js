const express = require("express");

const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const { sentBasicEmail } = require("./Services/email-service");

const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    jobs();
    // sentBasicEmail(
    //   "support@tarun.com",
    //   "tarunnahak25@gmail.com",
    //   "Hi there",
    //   "How are you?"
    // );
  });
};

setupAndStartServer();
