import render from './render';
import { FastifyReply, FastifyRequest } from 'fastify';

export default (req: FastifyRequest, res: FastifyReply) => {
  res
    .code(200)
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(render(req.url));
};
