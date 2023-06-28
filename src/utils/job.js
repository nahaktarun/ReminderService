const cron = require("node-cron");
const emailSerive = require("../Services/email-service");
const sender = require("../config/emailConfig");
const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailSerive.fetchPendingEmails();

    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailSerive.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );
    });
    console.log(response);
  });
};

module.exports = setupJobs;
