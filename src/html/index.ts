export const html = (content: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<html>
  <head>
  <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="main.js"></script>
  </body>
</html>
`;
};
