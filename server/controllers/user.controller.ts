import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';

let usersData: object[] = require('../mocks/usersData');

interface UserProps {
  _id: string;
  user: string;
  age: number;
  city: string;
}

/* ================================================== */
/* Endpoints                                          */
/* 1: allUsers                                        */
/* 2: findUserById                                    */
/* 3: addUser                                         */
/* 4: deleteUser                                      */
/* 5: updateUser                                      */
/* ================================================== */

/* ================================================== */
/* 1: allUsers                                        */
/* ================================================== */

const allUsers = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            user: { type: 'string' },
            age: { type: 'number' },
            city: { type: 'string' },
          },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    res.code(200).send(usersData);
  },
};

/* ================================================== */
/* 2: findUserById                                    */
/* ================================================== */

const findUserById = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          user: { type: 'string' },
          age: { type: 'number' },
          city: { type: 'string' },
        },
      },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    interface params {
      id: string;
    }
    const data = usersData.find(
      (user: UserProps) => user._id === (req.params as params).id
    );

    if (data) {
      res.code(200).send(data);
    } else {
      res.code(404).send({ message: 'Not found' });
    }
  },
};

/* ================================================== */
/* 3: addUser                                         */
/* ================================================== */

const addUser = {
  schema: {
    body: {
      type: 'object',
      required: ['user', 'age', 'city'],
      properties: {
        user: { type: 'string', pattern: '[a-zA-Z]' },
        age: { type: 'number' },
        city: { type: 'string', pattern: '[a-zA-Z]' },
      },
    },
    response: {
      201: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
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
    const { user, age, city } = req.body as requestBody;
    const data = { _id: uuidv4(), user, age, city };
    usersData = [...usersData, data];

    res.code(201).send(data);
  },
};

/* ================================================== */
/* 4: deleteUser                                      */
/* ================================================== */

const deleteUser = {
  schema: {
    body: {
      type: 'object',
      required: ['_id'],
      properties: {
        _id: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
      400: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    interface requestBody {
      _id: string;
    }

    const { _id } = req.body as requestBody;
    const initialDataLength = usersData.length;
    usersData = usersData.filter((user: UserProps) => user._id !== _id);

    if (initialDataLength === usersData.length + 1) {
      res.code(200).send({ message: 'User deleted' });
    } else {
      res.code(404).send({ message: 'Not found' });
    }
  },
};

/* ================================================== */
/* 5: updateUser                                      */
/* ================================================== */

const updateUser = {
  schema: {
    body: {
      type: 'object',
      required: ['_id'],
      properties: {
        _id: { type: 'string' },
        user: { type: 'string', pattern: '[a-zA-Z]' },
        age: { type: 'number' },
        city: { type: 'string', pattern: '[a-zA-Z]' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          user: { type: 'string' },
          age: { type: 'number' },
          city: { type: 'string' },
        },
      },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
      400: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: (req: FastifyRequest, res: FastifyReply) => {
    interface requestBody {
      _id: Required<string>;
      user?: string;
      age?: number;
      city?: string;
    }

    const { _id, user, age, city } = req.body as requestBody;

    usersData = usersData.map((item: UserProps) => {
      if (item._id === _id) {
        return {
          ...item,
          user: user ? user : item.user,
          age: age ? age : item.age,
          city: city ? city : item.city,
        };
      } else {
        return item;
      }
    });

    const data = usersData.find((item: UserProps) => item._id === _id);
    if (data) {
      res.code(200).send(data);
    } else {
      res.code(404).send({ message: 'Not found' });
    }
  },
};

export default {
  allUsers,
  findUserById,
  addUser,
  deleteUser,
  updateUser,
};
