
import { log } from "./../config/logging";
import { transporter as transport } from "./../config/nodemailer";
import { EMAIL_SETTINGS as mailConfig } from "./../config/config";

export default class MailService {
  public static async send_email (body: mailOptions) {
    try {
      body.from = mailConfig.auth.user;//From doesnt coming
      log.trace("Sending Email", body);
      if (typeof(body.to) === "string") {
        body.to = [body.to];
      }
      const result  = await transport.sendMail(body);
      if (result.rejected.length > 0) {
        log.error(`Email Rejected to ${result.rejected.join}`);
        if (result.rejected.length === (body.to && body.to.length)) {
          log.error("All Emails were rejected");
        }
        return false;
      }
      log.debug("Email result", result);
      return true;
    } catch (err) {
      log.error("Error Sending Email", err);
      return false;
    }
  }
}

interface mailOptions {
  from?: string,
  to?: string|Array<string>,
  subject: string,
  text?: string,
  attachments?: Array<object>,
}

