/**
 * @jest-environment node
 */

import app from '../../server';

describe('updateUser endpoint test suite', () => {
  afterAll(() => app.close());

  it('Sends good update user response', async () => {
    let response = await app.inject({
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
});
