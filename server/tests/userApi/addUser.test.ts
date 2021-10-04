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
});
