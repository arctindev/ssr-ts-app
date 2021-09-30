import { fastify } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import StaticRouter from './routes/static.routes';
import UserRouter from './routes/user.routes';

const PORT = process.env.PORT || 3000;

const app = fastify();

async function startApp() {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, './../public'),
    });

    app.register(StaticRouter);
    app.register(UserRouter, { prefix: '/user' });

    await app.listen(PORT);
    console.log('listening on port', PORT);
  } catch (e) {
    console.error(e);
  }
}

startApp();
