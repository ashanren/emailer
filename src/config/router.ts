
import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

export const request = () => {
  return FastifyRequest<IncomingMessage>;
}

export const reply = () => {
  return FastifyReply<ServerResponse>;
}

