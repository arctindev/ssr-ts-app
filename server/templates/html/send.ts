import render from './render';

const sendHTML = (req: any, res: any) => {
  res
    .code(200)
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(render(req.url));
};

export default sendHTML;
