import sendHTML from '../templates/html/send';

const StaticRouter = (fastify: any, opts: any, done: any) => {
  fastify.get('/', sendHTML);
  fastify.get('/about', sendHTML);
  fastify.get('/services', sendHTML);
  fastify.get('/404', sendHTML);

  done();
};

export default StaticRouter;
