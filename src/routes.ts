
import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { log } from "config/logging";
import * as mail from "controllers/mail";
import MailController from "controllers/MailController";

export default async(app: FastifyInstance) => {
  app.post('/mail/', MailController.send_mail);

  app.get('*', async (request, reply) => {
    log.warn("Unknown Get Route");
    reply.status(402).send('Forbidden');
  });

  app.post('*', async (request, reply) => {
    log.warn("Unknown Post Route");
    reply.status(402).send('Forbidden');
  });

  app.put('*', async (request, reply) => {
    log.warn("Unknown Put Route", (getRaw(request.raw)));
    reply.status(402).send('Forbidden');
  });
}

function getRaw (raw: any) {
  return raw["originalUrl"];
}
