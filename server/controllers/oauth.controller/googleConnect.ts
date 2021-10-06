import { FastifyReply, FastifyRequest } from 'fastify';
import axios, {AxiosResponse} from 'axios';

const getGoogleOAuthUserData = async (accessToken: string) => {
    try {

      const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`);
      return response.data
    } catch (err) {
      console.log("Google oauth get user data error: " , err.response.data);
    }
  };

const getGoogleOAuthToken = async (code: string) => {
    interface GoogleResponseData {
      access_token: string;
    }
    try {
      const response: AxiosResponse = await axios.post(
        `https://oauth2.googleapis.com/token`,
        {
          client_id: `${process.env.GOOGLE_OAUTH_CLIENT_ID}`,
          client_secret: `${process.env.GOOGLE_OAUTH_CLIENT_SECRET}`,
          code,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/auth/google-callback/'
        },
      );
      const accessToken = (response.data as GoogleResponseData).access_token;
      const data = await getGoogleOAuthUserData(accessToken);
      return data;
    } catch (err) {
      console.log("Google oauth get token error", err);
    }
};

const googleConnect = async (req: FastifyRequest, res: FastifyReply) => {
    interface GoogleQuery {
      code: string;
    }
    const userData = await getGoogleOAuthToken((req.query as GoogleQuery).code);
    if(userData) {
        res.status(200).send({userData})
      } else {
        res.status(400).send({message: 'something was wrong'})
      }
  }

export default googleConnect;