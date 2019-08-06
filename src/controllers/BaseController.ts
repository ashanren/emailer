
import { FastifyRequest, FastifyReply, } from "fastify";
import { ServerResponse } from "http";

export default abstract class BaseController {
  public static send_response (res: FastifyReply<ServerResponse>, code: number, message: string) {
    return res.status(code).send({msg: message});
  }

  public static client_error (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 400, message ? message : "Client Error");
  }

  public static unauthorized (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 401, message ? message : "Unauthorized");
  }

  public static payment_required (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 402, message ? message : "Payment Required");
  }

  public static forbidden (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 403, message ? message : "Forbidden");
  }

  public static not_found (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 404, message ? message : "Not Found");
  }

  public static conflict (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 409, message ? message : "Forbidden");
  }

  public static too_many (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 429, message ? message : "Too Many Requests");
  }

  public static fail (res: FastifyReply<ServerResponse>, message?: string) {
    return BaseController.send_response(res, 500, message ? message.toString() : "Server Failed");
  }
}

