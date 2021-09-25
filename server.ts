import express, { Application } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import spdy from "spdy";
import { promisify } from "util";
import fs from 'fs';
import { StaticRouter } from "react-router";
import { html } from "./src/html";
import App from "./client/App";

const app: Application = express();
const PORT = process.env.PORT || 5000;

const readFile = promisify(fs.readFile)

app.use(express.static("build"));

app.use("/favicon.ico", express.static("src/assets/favicon.ico"));

app.get("*", async (req : any, res : any) => {

  const context = {};
  const location = req.url;
    const content = ReactDOMServer.renderToString(
      React.createElement(
        StaticRouter,
        { location, context },
        React.createElement(App)
      )
    );

    if (!content) {
      return res.redirect("/404");
    }


  try {
    if(res.push){
      [
        "/main.css",
      ].forEach(async (file) => {
       res.push(file, {}).end(await readFile(`build${file}`))
      })
    }
    res.writeHead(200)
    res.end(await html(content))
    return res.send();
  }catch(error){
    res.status(500).send(error.toString())
  }
})

spdy.createServer(
  {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
  },
  app
).listen(PORT, () => {
  console.log('server listen on port 5000')
})