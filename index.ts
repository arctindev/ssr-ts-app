import express, {Application, Request, Response} from "express";
import getHTML from './server/controlers/html'

const app : Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/*', (req : Request, res : Response) => {
  res.send(getHTML(req.url));
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
})