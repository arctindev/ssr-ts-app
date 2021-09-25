export const html = (content: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preload" href="main.css" as="style">
  <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="main.js"></script>
  </body>
</html>
`;
};
