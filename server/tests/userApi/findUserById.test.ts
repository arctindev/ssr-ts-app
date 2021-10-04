/**
 * @jest-environment node
 */

import app from '../../server';

describe('findUserById endpoint test suite', () => {
  afterAll(() => app.close());

  it('Sends good get user response', async () => {
    const response = await app.inject({
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
  });

  it('Sends good get not existing user response', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/user/9',
    });
    expect(response.statusCode).toBe(404);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
    expect(response.body).toEqual(JSON.stringify({ message: 'Not found' }));
  });
});
