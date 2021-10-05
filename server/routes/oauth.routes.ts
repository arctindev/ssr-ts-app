import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { FastifyReply, FastifyRequest } from 'fastify';
import axios, { AxiosResponse } from 'axios';
import 'dotenv/config';

const getGithubOAuthToken = async (code: string) => {
  interface GHResponseData {
    access_token : string
  }
  axios
    .post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: `${process.env.GH_OAUTH_CLIENT_ID}`,
        client_secret: `${process.env.GH_OAUTH_CLIENT_SECRET}`,
        code,
      },
      { headers: { accept: 'application/json' } }
    )
    .then((res: AxiosResponse) => console.log((res.data as GHResponseData).access_token))
    .catch((err) => console.log(err));
};

export default (
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
) => {
  app.get('/github-callback/', (req: FastifyRequest, res: FastifyReply) => {
    interface GHQuery {
      code: string
    }
    getGithubOAuthToken((req.query as GHQuery).code);
  });

  done();
};
