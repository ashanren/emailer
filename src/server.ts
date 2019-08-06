
import * as fastify from "fastify";
import routes from "./routes";
import { log as LOG } from "./config/logging";
import { Server, IncomingMessage, ServerResponse } from "http";
const port    = process.env.PORT || require('./config/config').port;

const start = async () => {
  try {
    const app: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});
    app.register(routes);
    app.listen(port, '0.0.0.0');
    LOG.info(`Email Server Started - Listening on port: ${port}`);
  } catch (err) {
    LOG.error("Failed to Start Email Server:", err);
  }
}

start();

