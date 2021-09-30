import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./../../client/views/App";

const getHTML = (location: string) => {
  const content: string | undefined = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location, context:{} },
      React.createElement(App)
    )
  );

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://unpkg.com">
<link rel="preload" href="css/main.css" as="style">
<link rel="manifest" href="manifest.json">
<link rel="icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" href="css/main.css">
<title>Test js chunk app</title>
</head>
<body>
<div id="root">${content}</div>
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js" defer></script>
<script crossorigin src='https://unpkg.com/react-router-dom@5.3.0/umd/react-router-dom.min.js' defer></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" defer></script>
<script src="js/main.js" defer></script>
</body>
</html>
`;
};

export default getHTML;