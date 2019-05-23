
import { log } from "./../config/logging";
import BaseController from "./BaseController";
import MailService from "./../services/MailService"

export default class MailController extends BaseController {
  constructor() {
    log.info("Mail Controller");
    super();
  }

  public static async send_mail(req: any, res: any) {
    log.info("attempting to send message");
    //const result: boolean = await MailService.send_email(req.body);
    if (!await MailService.send_email(req.body)) {
      super.unauthorized(res, "Failed to send Email");
    }
    super.send_response(res, 200, "Successfully Sent");
  }
}

