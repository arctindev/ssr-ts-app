/**
 * @jest-environment node
 */

import app from '../server'
 
describe('Static files test suite', () => {

  afterAll(() => app.close());

  it('Sends home page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual('text/html; charset=utf-8');
  });

  it('Sends about page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/about'
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual('text/html; charset=utf-8');
  });

  it('Sends services page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/services'
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual('text/html; charset=utf-8');
  });

  it('Sends 404 page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/404'
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual('text/html; charset=utf-8');
  });
});
