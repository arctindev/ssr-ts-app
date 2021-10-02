export default (res: any) => {
  res.setHeader('Cache-Control', 'public, max-age=60');
};
