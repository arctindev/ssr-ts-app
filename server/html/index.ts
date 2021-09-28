export const html = (content: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preload" href="main.css" as="style">
  <link rel="manifest" href="manifest.json">
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <link rel="stylesheet" href="main.css">
  <title>Test js chunk app</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js" defer></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" defer></script>
    <script src="main.js" defer></script>
  </body>
</html>
`;
};
