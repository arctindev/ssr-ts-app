/**
 * @jest-environment node
 */

import app from '../server';

const getUsersResponse = [
  { id: '1', user: 'marek', age: 26, city: 'tarnów' },
  { id: '2', user: 'aniak', age: 23, city: 'kraków' },
  { id: '3', user: 'robert', age: 18, city: 'reszów' },
  { id: '4', user: 'arek', age: 28, city: 'warszawa' },
];

describe('User test suite', () => {
  afterAll(() => app.close());

  it('Sends good get all response', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/user/',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify(getUsersResponse));
  });

  it('Sends good get user response', async () => {
    let response = await app.inject({
      method: 'GET',
      url: '/api/user/2',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ id: '2', user: 'aniak', age: 23, city: 'kraków' })
    );

    response = await app.inject({
      method: 'GET',
      url: '/api/user/9',
    });
    expect(response.statusCode).toBe(404);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'Not found' }));
  });

  it('Sends good add user response', async () => {
    let response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 'lukasz',
        age: 28,
        city: 'tarnów',
      },
    });
    expect(response.statusCode).toBe(201);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody.user).toEqual('lukasz');
    expect(addUserBody.age).toEqual(28);
    expect(addUserBody.city).toEqual('tarnów');

    response = await app.inject({
      method: 'GET',
      url: `/api/user/${addUserBody.id}`,
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({
        id: addUserBody.id,
        user: addUserBody.user,
        age: addUserBody.age,
        city: addUserBody.city,
      })
    );
  });

  it('Sends good delete user response', async () => {
    let response = await app.inject({
        method: 'GET',
        url: '/api/user/2',
      });
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        'application/json; charset=utf-8'
      );
      expect(response.body).toEqual(
        JSON.stringify({ id: '2', user: 'aniak', age: 23, city: 'kraków' })
      );
    
    response = await app.inject({
      method: 'DELETE',
      url: '/api/user/',
      payload: {
        id: '2',
      },
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'User deleted' }));

    response = await app.inject({
      method: 'GET',
      url: '/api/user/2',
    });
    expect(response.statusCode).toBe(404);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'Not found' }));
  });

  it('Sends good update user response', async () => {
    let response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        id: '2',
        age: 25,
        city: 'katowice',
      },
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ id: '2', user: 'aniak', age: 25, city: 'katowice' })
    );

    response = await app.inject({
      method: 'GET',
      url: '/api/user/2',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).not.toEqual(
      JSON.stringify({ id: '2', user: 'aniak', age: 23, city: 'kraków' })
    );
  });
});
