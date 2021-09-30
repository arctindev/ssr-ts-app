import { getHTML } from './routes/html';
import fs from 'fs';

const mimeMap = {
    'html': 'text/html',
    'js': 'application/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon',
    'json': 'application/json',
    'manifest': 'application/webpub+json'
}

export const staticFileRouter = async (req: any) => {
    const [file, fileType] : string = req.url.split('.');
    switch(fileType){
        case undefined:
            return {
                data: getHTML(req.url),
                mime: mimeMap['html'],
            }
        case 'css':
            return {
                data: fs.readFileSync(__dirname + `./../public/${req.url}`),
                mime: mimeMap['css']
            }
        case 'js':
            return {
                data: fs.readFileSync(__dirname + `./../public/${req.url}`),
                mime: mimeMap['js'],
            }
        case 'ico':
            return {
                data: fs.readFileSync(__dirname + `./../public/favicon.ico`),
                mime: mimeMap['ico'],
            }
        case 'json':
            return {
                data: fs.readFileSync(__dirname + `./../public/manifest.json`),
                mime: 'manifest',
            }
    }
    return true;
}