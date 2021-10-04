import sendHTML from '../templates/html/send';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default (
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
) => {
  app.get('/', sendHTML);
  app.get('/about', sendHTML);
  app.get('/services', sendHTML);
  app.get('/404', sendHTML);
  app.setNotFoundHandler((req: any, res: any) => {
    res.redirect('/404');
  });

  done();
};
