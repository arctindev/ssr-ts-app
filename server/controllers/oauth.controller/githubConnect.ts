import { FastifyReply, FastifyRequest } from 'fastify';
import { Octokit } from '@octokit/core';
import axios, { AxiosResponse } from 'axios';

const getGithubOAuthUserData = async (accessToken: string) => {
    try {
      const octokit = new Octokit({ auth: accessToken });
      const response = await octokit.request('GET /user');
      return response.data
    } catch (err) {
      console.log("Github oauth get user data error: " , err.response.data);
    }
  };
  
const getGithubOAuthToken = async (code: string) => {
    interface GHResponseData {
      access_token: string;
    }
    try {
      const response: AxiosResponse = await axios.post(
        `https://github.com/login/oauth/access_token`,
        {
          client_id: `${process.env.GH_OAUTH_CLIENT_ID}`,
          client_secret: `${process.env.GH_OAUTH_CLIENT_SECRET}`,
          code,
        },
        { headers: { accept: 'application/json' } }
      );
      const accessToken = (response.data as GHResponseData).access_token;
      const data = await getGithubOAuthUserData(accessToken);
      return data;
    } catch (err) {
      console.log("Github oauth get token error", err);
    }
};

const githubConnect = async (req: FastifyRequest, res: FastifyReply) => {
    interface GHQuery {
      code: string;
    }
    const userData = await getGithubOAuthToken((req.query as GHQuery).code);
    if(userData) {
      res.status(200).send({userData})
    } else {
      res.status(400).send({message: 'something was wrong'})
    }
  }

export default githubConnect;