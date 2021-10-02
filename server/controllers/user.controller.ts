import { FastifyReply, FastifyRequest } from 'fastify';

export default {
  add: (req: FastifyRequest, res: FastifyReply) => {
    res
      .code(200)
      .header('Content-Type', 'application/json')
      .send({ user: 'add' });
  },
  update: (req: FastifyRequest, res: FastifyReply) => {
    res
      .code(200)
      .header('Content-Type', 'application/json')
      .send({ user: 'update' });
  },
  delete: (req: FastifyRequest, res: FastifyReply) => {
    res
      .code(200)
      .header('Content-Type', 'application/json')
      .send({ user: 'delete' });
  },
};
