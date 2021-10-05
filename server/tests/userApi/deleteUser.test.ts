/**
 * @jest-environment node
 */

import app from '../../server';

describe('deleteUser endpoint test suite', () => {
  afterAll(() => app.close());

  // ===================================================================================

  it('Sends good delete user response', async () => {
    const response = await app.inject({
      method: 'DELETE',
      url: '/api/user/',
      payload: {
        _id: '3',
      },
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'User deleted' }));
  });

  // ===================================================================================

  it('Checks if user exists and deletes him/her afterwards', async () => {
    let response = await app.inject({
      method: 'GET',
      url: '/api/user/2',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ _id: '2', user: 'aniak', age: 23, city: 'krakow' })
    );

    response = await app.inject({
      method: 'DELETE',
      url: '/api/user/',
      payload: {
        _id: '2',
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

  // ===================================================================================

  it('Sends good delete not existing user response', async () => {
    const response = await app.inject({
      method: 'DELETE',
      url: '/api/user/',
      payload: {
        _id: '948',
      },
    });
    expect(response.statusCode).toBe(404);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'Not found' }));
  });

  // ===================================================================================

  it('Sends correct messages for bad data', async () => {
    const response = await app.inject({
      method: 'DELETE',
      url: '/api/user/',
      payload: {
        _idddd: '948',
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ message: "body should have required property '_id'" })
    );
  });

  // ===================================================================================

  it('Sends correct messages for empty data', async () => {
    const response = await app.inject({
      method: 'DELETE',
      url: '/api/user/',
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ message: 'body should be object' })
    );
  });
});
