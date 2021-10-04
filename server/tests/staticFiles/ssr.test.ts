/**
 * @jest-environment node
 */

import app from '../../server';

describe('Static files test suite', () => {
  afterAll(() => app.close());

  // ===================================================================================

  it('Sends home page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'text/html; charset=utf-8'
    );
    expect(typeof response.body).toEqual(typeof 'string');
  });

  // ===================================================================================

  it('Sends about page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/about',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'text/html; charset=utf-8'
    );
    expect(typeof response.body).toEqual(typeof 'string');
  });

  // ===================================================================================

  it('Sends services page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/services',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'text/html; charset=utf-8'
    );
    expect(typeof response.body).toEqual(typeof 'string');
  });

  // ===================================================================================

  it('Sends 404 page html file', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/404',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      'text/html; charset=utf-8'
    );
    expect(typeof response.body).toEqual(typeof 'string');
  });

  it('Handles random routes', async () => {
    let response = await app.inject({
      method: 'GET',
      url: '/fsdafadsf/asdf/ads/f/asdf/a/sdfa/',
    });
    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toEqual('/404')

    response = await app.inject({
      method: 'GET',
      url: `/fsd1232131!-=fvdsa''\][412'341`,
    });
    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toEqual('/404')

    response = await app.inject({
      method: 'GET',
      url: `421341/234/123/4/123/41/234/12/43`,
    });
    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toEqual('/404')
  });
});
