/**
 * @jest-environment node
 */

import app from '../../server';

describe('updateUser endpoint test suite', () => {
  afterAll(() => app.close());

  // ===================================================================================

  it('Sends good update user response', async () => {
    const response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        _id: '3',
        age: 25,
        city: 'katowice',
      },
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ _id: '3', user: 'robert', age: 25, city: 'katowice' })
    );
  });

  // ===================================================================================

  it('checks if updated data is correct', async () => {
    let response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        _id: '3',
        age: 29,
        city: 'katowice',
      },
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({ _id: '3', user: 'robert', age: 29, city: 'katowice' })
    );

    response = await app.inject({
      method: 'GET',
      url: '/api/user/3',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).not.toEqual(
      JSON.stringify({ _id: '3', user: 'robert', age: 18, city: 'rzeszow' })
    );
  });

  // ===================================================================================

  it('checks if updated data is correct', async () => {
    const response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        _id: '7',
        age: 29,
        city: 'katowice',
      },
    });
    expect(response.statusCode).toBe(404);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'Not found' }));
  });

  // ===================================================================================

  it('checks if validation works for bad city data', async () => {
    const response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        _id: '3',
        age: 29,
        city: 25,
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({
        message: 'body.city should match pattern "[a-zA-Z]"',
      })
    );
  });

  // ===================================================================================

  it('checks if validation works for bad age data', async () => {
    const response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        _id: '7',
        age: 'dssd',
        city: 'tarnow',
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({
        message: 'body.age should be number',
      })
    );
  });

  // ===================================================================================

  it('checks if validation works for bad user data', async () => {
    const response = await app.inject({
      method: 'PATCH',
      url: '/api/user/',
      payload: {
        _id: '1',
        user: 342,
        age: 23,
        city: 'tarnow',
      },
    });
    expect(response.statusCode).toBe(400);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(
      JSON.stringify({
        message: 'body.user should match pattern "[a-zA-Z]"',
      })
    );
  });
});
