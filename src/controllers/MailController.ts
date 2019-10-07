
import { log as LOG } from "./../config/logging";
import BaseController from "./BaseController";
import MailService from "./../services/MailService"
import { FastifyRequest, FastifyReply, } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

export default class MailController extends BaseController {
  constructor() {
    super();
  }

  public static async send_mail(req: any, res: FastifyReply<ServerResponse>) {
    if (!await MailService.send_email(req.body)) {
      super.fail(res, "Failed to send Email");
    }
    super.send_response(res, 200, "Successfully Sent");
  }
}

