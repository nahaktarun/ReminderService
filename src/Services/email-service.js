const sender = require("../config/emailConfig");

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

module.exports = { sentBasicEmail };
