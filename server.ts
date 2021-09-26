import express, { Application, Request, Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import spdy from "spdy";
import { promisify } from "util";
import fs from "fs";
import { StaticRouter } from "react-router";
import { html } from "./server/html";
import App from "./client/views/App";
import { getChunkName } from "./server/utils/getChunkName";

//=============================================
// Ports
// 1. http/1 : port 80
// 2. https/2 : port 443
//=============================================

// ============================================
//             2. http/1 : port 80
// ============================================

const http: Application = express();

http.get("*", function (req: Request, res: Response) {
  res.redirect("https://" + req.headers.host);
});

http.listen(80, () => {
  console.log("Server listen on port 80");
});

// ============================================
//             2. https/2 : port 443
// ============================================

const app: Application = express();

const readFile = promisify(fs.readFile);

app.use(express.static("public"));
interface Http2Response extends Response {
  push: any;
}

app.get("*", async (req: Request, res: Http2Response) => {
  const context = {};
  const location: string = req.url;
  const content: string | undefined = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location, context },
      React.createElement(App)
    )
  );
  if (!content) {
    return res.redirect("/404");
  }

  const jsChunk = getChunkName(location);

  try {
    if (res.push) {
      [ 
        { file: `${jsChunk}`, mime: `application/javascript` },
        { file: `/main.js`, mime: `application/javascript` },
        { file: "/main.css", mime: `text/css` },
      ].forEach(async (file) => {
        res
          .push(file.file, {
            response: {
              "Content-Type": `${file.mime}`,
            },
          })
          .end(await readFile(`public${file.file}`));
      });
    }
    res.writeHead(200);
    res.end(await html(content));
    return res.send();
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

spdy
  .createServer(
    {
      key: fs.readFileSync("./ssl/server.key"),
      cert: fs.readFileSync("./ssl/server.cert"),
    },
    app
  )
  .listen(443, () => {
    console.log("Server listen on port 443");
  });
