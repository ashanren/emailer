
//Modules
import { FastifyInstance } from "fastify";
//Custom Modules
import { log }        from "./config/logging";
import MailController from "./controllers/MailController";

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

  app.delete('*', async (request, reply) => {
    log.warn("Unknown Delete Route", (getRaw(request.raw)));
    reply.status(402).send('Forbidden');
  });
}

const getRaw = (raw: any) => {
  return raw["originalUrl"];
}

