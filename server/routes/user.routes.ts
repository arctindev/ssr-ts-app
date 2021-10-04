import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import userController from '../controllers/user.controller';

export default (
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
) => {
  app.get('/:id', userController.findUserById);
  app.get('/', userController.allUsers);
  app.post('/', userController.addUser);
  app.delete('/', userController.deleteUser);
  app.patch('/', userController.updateUser);

  done();
};
