import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';
import data from '../mocks/usersData';
let usersData: object[] = data;

interface UserProps {
  id: string;
  name: string;
}

const allUsers = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user: { type: 'string' },
            age: { type: 'number' },
            city: { type: 'string' },
          },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    res.send(usersData);
  },
};

const findUserById = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          user: { type: 'string' },
          age: { type: 'number' },
          city: { type: 'string' },
        },
      },
      404: {
        type: 'object',
        properties: {
          message: {type: 'string'}
        }
      }
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    interface params {
      id: string;
    }
    const data = usersData.find(
      (item) => (item as UserProps).id === (req.params as params).id
    );

    if(data) {
    res.send(data);
    } else {
    res.code(404).send({message: 'Not found'})
    }
  },
};

const addUser = {
  schema: {
    body: {
      type: 'object',
      required: ['user', 'age', 'city'],
      properties: {
        user: { type: 'string' },
        age: { type: 'number' },
        city: { type: 'string' },
      },
    },
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          user: { type: 'string' },
          age: { type: 'number' },
          city: { type: 'string' },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    interface requestBody {
      user: string;
      age: number;
      city: string;
    }

    const data = {
      id: uuidv4(),
      user: (req.body as requestBody).user,
      age: (req.body as requestBody).age,
      city: (req.body as requestBody).city,
    };
    usersData = [...usersData, data];
    res.code(201).send(data);
  },
};

const deleteUser = {
  schema: {
    body: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    interface requestBody {
      id: string;
    }

    res.code(200).send({message: 'User deleted'});
  },
}

const updateUser = (req: FastifyRequest, res: FastifyReply) => {
  res
    .code(200)
    .header('Content-Type', 'application/json')
    .send({ user: 'update' });
};

export default {
  allUsers,
  findUserById,
  addUser,
  deleteUser,
  updateUser,
};
