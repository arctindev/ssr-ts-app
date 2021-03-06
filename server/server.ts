import fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import staticRoutes from './routes/static.routes';
import userRoutes from './routes/user.routes';
import oauthRoutes from './routes/oauth.routes';
import setCustomCacheControl from './utility/setCustomCacheControl';

const app: FastifyInstance = fastify();

app.register(staticRoutes);

app.register(fastifyStatic, {
  root: path.join(__dirname, './../public'),
  setHeaders: setCustomCacheControl,
});

app.register(userRoutes, { prefix: '/api/user' });

app.register(oauthRoutes, { prefix: '/auth' });

export default app;
