import Logger from "../config/logger";
import * as nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { config } from "../config/config";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: Number(config.MAIL_PORT) || 0,
  secure: false,
  requireTLS: true,
  auth: {
    user: config.MAIL_USERNAME,
    pass: config.MAIL_PASSWORD,
  },
  logger: Boolean(config.MAIL_LOGGER),
} as unknown as SMTPTransport.Options);

const sendMail = async (
  to: string,
  subject: string,
  message: string,
  type: string = "text"
) => {
  let info;
  if (type === "text") {
    info = await transporter.sendMail({
      from: '"' + config.MAIL_SENDER_NAME + '" <' + config.MAIL_FROM + ">",
      to,
      subject,
      text: message,
      // headers: { 'x-myheader': 'test header' }
    });
  } else {
    info = await transporter.sendMail({
      from: '"' + config.MAIL_SENDER_NAME + '" <' + config.MAIL_FROM + ">",
      to,
      subject,
      html: message,
      // headers: { 'x-myheader': 'test header' }
    });
  }

  console.log("Message sent: %s");
};
export default sendMail;
