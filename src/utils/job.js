const cron = require("node-cron");
const emailSerive = require("../Services/email-service");
const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailSerive.fetchPendingEmails();
    console.log(response);
  });
};

module.exports = setupJobs;
