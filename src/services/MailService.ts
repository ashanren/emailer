
import { log } from "config/logging";
import { transporter as transport } from "config/nodemailer";
import { EMAIL_SETTINGS as mailConfig } from "config/config";

export const send_email = async (body: object) => {
  try {
    body.from = mailConfig.auth.user;//From doesnt coming
    log.trace("Sending Email", body);
    const result  = await transport.sendMail(body);
    log.debug("Email result", result);
  } catch (err) {
    log.error("Error Sending Email", err);
  }
}

