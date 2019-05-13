
import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { log } from "config/logging";
import * as mail from "controllers/mail";

export default async(app: FastifyInstance) => {
  //log.warn("ROUTE GRABBING");
  //app.post('/mail/', mail.send_email);

  app.get('*', async (req: FastifyRequest, res: FastifyReply) => {
    log.warn("Unknown Get Route", req.raw["originalUrl"]);
    res.status(402).send('Forbidden');
  });

  app.post('*', async (req: FastifyRequest, res: FastifyReply) => {
    log.warn("Unknown Post Route", req.raw["originalUrl"]);
    res.status(402).send('Forbidden');
  });

  app.put('*', async (req: FastifyRequest, res: FastifyReply) => {
    log.warn("Unknown Put Route", req.raw["originalUrl"]);
    res.status(402).send('Forbidden');
  });
}
