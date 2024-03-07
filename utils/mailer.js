const nodeMailer = require("nodemailer");
const {
  mailTransporterObj,
  mailSource,
  sourceMail,
} = require("../utils/helper");
const Email = require("email-templates");
const Path = require("path");
const { dirname } = require("path");
const transporter = nodeMailer.createTransport(mailTransporterObj);
const email = new Email({
  views: {
    // root: "./email_templates",
    root: Path.join(__dirname, "email_templates"),
    options: { extension: "ejs" },
  },
  message: {
    from: `${mailSource}`,
  },
  transport: transporter,
  send: true,
  preview: true,
  // preview: {
  //   open: {
  //     app: "firefox",
  //     wait: false,
  //   },
  // },
  preview: false,
});

class Mailer {
  static email1({
    first_name,
    last_name,
    recipient,
    score,
    base_url_api,
    base_url,
  }) {
    email
      .send({
        // template: "email1",
        template: Path.join(__dirname, "email_templates", "email1"),
        message: { to: recipient },
        locals: {
          first_name: first_name,
          last_name: last_name,
          recipient: recipient,
          score: score,
          from: sourceMail,
          base_url_api,
          base_url,
        },
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }

  static email2({
    first_name,
    last_name,
    recipient,
    score,
    base_url_api,
    base_url,
  }) {
    email
      .send({
        // template: "email2",
        template: Path.join(__dirname, "email_templates", "email2"),
        message: { to: recipient },
        locals: {
          first_name: first_name,
          last_name: last_name,
          recipient: recipient,
          score: score,
          from: sourceMail,
          base_url_api,
          base_url,
        },
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }

  static email3({
    first_name,
    last_name,
    recipient,
    score,
    base_url_api,
    base_url,
  }) {
    email
      .send({
        // template: "email3",
        template: Path.join(__dirname, "email_templates", "email3"),
        message: { to: recipient },
        locals: {
          first_name: first_name,
          last_name: last_name,
          recipient: recipient,
          score: score,
          from: sourceMail,
          base_url_api,
          base_url,
        },
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }
}

module.exports = Mailer;
