import express, { Application, Request, Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { html } from "./src/html";
import App from "./client/App";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("build"));

app.use("/favicon.ico", express.static("src/assets/favicon.ico"));

app.get("*", (req: Request, res: Response) => {
  const context = {};
  const location = req.url;
  console.log(req.url);
  try {
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

    return res.send(html(content));
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
