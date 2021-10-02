import fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import StaticRouter from './routes/static.routes';
import UserRouter from './routes/user.routes';
import setCustomCacheControl from './utility/setCustomCacheControl';

const PORT = process.env.PORT || 3000;

const app: FastifyInstance = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, './../public'),
  setHeaders: setCustomCacheControl,
});

app.register(StaticRouter);
app.register(UserRouter, { prefix: '/api/user' });

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('listening on port', PORT);
});
