
import { FastifyRequest, FastifyReply, } from "fastify";

export abstract class BaseController {
  public static send_response (res: FastifyReply, code: number, message: string) {
    return res.status(code).send({msg: message});
  }

  public client_error (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 400, message ? message : "Client Error");
  }

  public unauthorized (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 401, message ? message : "Unauthorized");
  }

  public payment_required (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 402, message ? message : "Payment Required");
  }

  public forbidden (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 403, message ? message : "Forbidden");
  }

  public not_found (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 404, message ? message : "Not Found");
  }

  public conflict (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 409, message ? message : "Forbidden");
  }

  public too_many (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 429, message ? message : "Too Many Requests");
  }

  public fail (res: FastifyReply, message?: string) {
    return BaseController.send_response(res, 500, message ? message.toString() : "Server Failed");
  }
}

