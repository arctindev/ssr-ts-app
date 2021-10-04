/**
 * @jest-environment node
 */

import app from '../../server';

const getUsersResponse = [
  { _id: '1', user: 'marek', age: 26, city: 'tarnow' },
  { _id: '2', user: 'aniak', age: 23, city: 'krakow' },
  { _id: '3', user: 'robert', age: 18, city: 'rzeszow' },
  { _id: '4', user: 'arek', age: 28, city: 'warszawa' },
];

describe('allUsers endpoint test suite', () => {
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
});
