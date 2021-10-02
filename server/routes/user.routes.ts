import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import userController from '../controllers/user.controller';

export default (
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
) => {
  app.get('/add', userController.add);
  app.get('/update', userController.update);
  app.get('/delete', userController.delete);

  done();
};
