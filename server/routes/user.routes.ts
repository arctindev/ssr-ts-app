const UserRouter = (fastify: any, opts: any, done: any) => {
  fastify.get('/add', (req: any, res: any) => {
    res
      .code(200)
      .header('Content-Type', 'application/json')
      .send({ user: 'add' });
  });
  fastify.get('/delete', (req: any, res: any) => {
    res
      .code(200)
      .header('Content-Type', 'application/json')
      .send({ user: 'delete' });
  });
  fastify.get('/update', (req: any, res: any) => {
    res
      .code(200)
      .header('Content-Type', 'application/json')
      .send({ user: 'update' });
  });

  done();
};

export default UserRouter;
