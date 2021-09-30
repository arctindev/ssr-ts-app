import fs from "fs";
import http2 from "http2";
import { requestHandler } from "./server/app";

const port = 3000;
const options = {
  key: fs.readFileSync("./ssl/server.key"),
  cert: fs.readFileSync("./ssl/server.cert"),
  allowHTTP1: true,
};

const server = http2.createSecureServer(options, requestHandler);

server.on("error", (error) => {
  console.log(`Something went wrong`, error);
});

server.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
