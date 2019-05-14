
import { log } from "config/logging";
import { transporter as transport } from "config/nodemailer";
import { EMAIL_SETTINGS as mailConfig } from "config/config";

export default class MailService {
  public static async send_email (body: mailOptions) {
    try {
      body.from = mailConfig.auth.user;//From doesnt coming
      log.trace("Sending Email", body);
      const result  = await transport.sendMail(body);
      log.debug("Email result", result);
    } catch (err) {
      log.error("Error Sending Email", err);
    }
    return "ok then";
  }
}

interface mailOptions {
  from?: string,
  to?: string|Array<string>,
  subject: string,
  text?: string,
  attachments?: Array<object>,
}

