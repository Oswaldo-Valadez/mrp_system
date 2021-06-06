const transporter = require("./transporter");
const default_mails = require("./default_mails");
const ejs = require("ejs");

exports.sender = async ({
  data = {},
  template = "default",
  from = "",
  to = "",
  cc = "",
  subject = "New Mail",
  attachments = [
    {
      filename: "logo.png",
      path: "./public/assets/imgs/logo.png",
      cid: "logo@projectname.ee", //same cid value as in the html img src
    },
  ],
}) => {
  try {
    const mailtHTML = await ejs.renderFile(
      `./src/utils/mailer/templates/${template}.ejs`,
      { data }
    );

    await transporter.sendMail({
      from: from,
      to: to,
      cc: cc,
      subject: subject,
      html: mailtHTML,
      attachments: attachments,
    });

    return;
  } catch (error) {
    console.log("mailer > sender - catch err: ", err);
  }
};
