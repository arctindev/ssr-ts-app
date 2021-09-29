import { router } from "./router";

export const requestHandler = async (req: any,res: any) => {
    return new Promise((resolve, reject) => {
        const file = router(req.url)
        if(file) {
            resolve(file);
        } else {
            reject('Couldnt load file');
        }
    }).then((data) => {
        res.writeHead(200);
        res.end(data);
    }).catch((error) => {
        console.log(error);
        res.writeHead(500);
        res.end('Server error');
    })
}
