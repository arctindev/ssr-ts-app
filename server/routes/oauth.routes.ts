import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import oauthController from '../controllers/oauth.controller/';
import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';


export default (
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
) => {
  app.get('/github-connect', (req: FastifyRequest, res: FastifyReply) => {
    res.redirect(`${process.env.GH_REDIRECT_OAUTH_LINK}`)
  })
  app.get('/github-callback/', oauthController.githubConnect);

  app.get('/google-connect', (req: FastifyRequest, res: FastifyReply) => {
    res.redirect(`${process.env.GOOGLE_REDIRECT_OAUTH_LINK}`)
  })
  app.get('/google-callback/', oauthController.googleConnect);

  done();
};
