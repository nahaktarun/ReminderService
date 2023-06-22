const express = require("express");

const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const { sentBasicEmail } = require("./Services/email-service");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

    sentBasicEmail(
      "support@tarun.com",
      "tarunnahak25@gmail.com",
      "Hi there",
      "How are you?"
    );
  });
};

setupAndStartServer();
