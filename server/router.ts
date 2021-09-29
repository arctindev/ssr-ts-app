import fs from 'fs'
import { getHtml } from './../server/routes/html';

const getFile = (fileName: string) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
        if (err) {
          reject(err)
          return;
        }
        resolve(data)
      })
    })
}
  
export const router = (location : string) => {
    switch(location){
        case '/':
            return getHtml(location);

        case '/404':
            return getHtml(location);

        case '/about':
            return getHtml(location);
        
        case '/services':
            return getHtml(location);

        case '/main.css':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        case '/main.js':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));
        
        case '/home.js':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        case '/about.js':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        case '/services.js':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        case '/404.js':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        case '/service-worker.js':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));
        
        case '/manifest.json':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        case '/favicon.ico':
            return getFile(__dirname +  `/../public${location}`)
                    .then((data) => data)
                    .catch(err => console.log(err));

        default:
            return undefined;
    }
}