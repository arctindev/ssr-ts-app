import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import oauthController from '../controllers/oauth.controller';
import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';


export default (
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
) => {
  app.get('/github-callback/', oauthController.githubConnect);
  app.get('/github-connect', (req: FastifyRequest, res: FastifyReply) => {
    res.redirect(`${process.env.GH_Redirect_OAUTH_Link}`)
  })
  done();
};
