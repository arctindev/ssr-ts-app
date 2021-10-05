/**
 * @jest-environment node
 */

import app from '../../server';

describe('addUser endpoint test suite', () => {
  afterAll(() => app.close());

  // ===================================================================================

  it('Sends good add user response', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 'lukasz',
        age: 28,
        city: 'tarnow',
      },
    });
    expect(response.statusCode).toBe(201);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody.user).toEqual('lukasz');
    expect(addUserBody.age).toEqual(28);
    expect(addUserBody.city).toEqual('tarnow');
  });

  // ===================================================================================

  it('Checks if user was successfuly added', async () => {
    let response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 'marian',
        age: 48,
        city: 'tarnow',
      },
    });
    expect(response.statusCode).toBe(201);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody).toHaveProperty('_id');
    expect(addUserBody.user).toEqual('marian');
    expect(addUserBody.age).toEqual(48);
    expect(addUserBody.city).toEqual('tarnow');

    response = await app.inject({
      method: 'GET',
      url: `/api/user/${addUserBody._id}`,
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({
        _id: addUserBody._id,
        user: addUserBody.user,
        age: addUserBody.age,
        city: addUserBody.city,
      })
    );
  });

  // ===================================================================================

  it('Checks if validation works correctly', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 43,
        age: 28,
        city: 'tarnow',
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody).toEqual({
      message: 'body.user should match pattern "[a-zA-Z]"',
    });
  });

  // ===================================================================================

  it('Checks if validation works correctly', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 'adam',
        age: 28,
        city: 43,
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody).toEqual({
      message: 'body.city should match pattern "[a-zA-Z]"',
    });
  });

  // ===================================================================================

  it('Checks if api handles not present required data', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        age: 28,
        city: 'poznan',
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody).toEqual({
      message: "body should have required property 'user'",
    });
  });

  // ===================================================================================

  it('Checks if api handles not present required data', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 'ania',
        city: 'poznan',
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody).toEqual({
      message: "body should have required property 'age'",
    });
  });

  // ===================================================================================

  it('Checks if api handles not present required data', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/user/',
      payload: {
        user: 'ania',
        age: 29,
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    const addUserBody = JSON.parse(response.body);
    expect(addUserBody).toEqual({
      message: "body should have required property 'city'",
    });
  });
});
