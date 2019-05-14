
import { log } from "config/logging";
import BaseController from "controllers/BaseController";
import MailService from "services/MailService"

export default class MailController extends BaseController {
  constructor() {
    log.info("Mail Controller");
    super();
  }

  public static async send_mail(req: any, res: any) {
    const result: string = await MailService.send_email(req.body);
    super.unauthorized(res, "THIS WILL BE FINE");
    /*
    if (MailService.) {
    }
     */
  }
}

