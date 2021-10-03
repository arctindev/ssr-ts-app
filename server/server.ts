import fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import StaticRouter from './routes/static.routes';
import UserRouter from './routes/user.routes';
import setCustomCacheControl from './utility/setCustomCacheControl';

const app: FastifyInstance = fastify();

app.register(StaticRouter);

app.register(fastifyStatic, {
  root: path.join(__dirname, './../public'),
  setHeaders: setCustomCacheControl,
});

app.register(UserRouter, { prefix: '/api/user' });

export default app;
