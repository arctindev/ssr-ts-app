import { staticFileRouter } from "./staticFileRouter";

export const requestHandler = (req: any, res: any) => {
  return new Promise((resolve, reject) => {
    const success = staticFileRouter(req);
    if (success) {
      resolve(success);
    } else {
      reject("Couldnt load file");
    }
  })
    .then((data: any) => {
      res.setHeader('Content-Type', `${data.mime}`)
      res.writeHead(200);
      res.end(data.data)
    })
    .catch((error) => {
      console.log(error);
      res.writeHead(500);
      res.end({ message: error });
    });
};
