const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const hostname = '0.0.0.0';
const port = 8081;

const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    const parsed_url = url.parse(req.url);
    let path = `.${parsed_url.pathname}`;
    const ext = path.split('.').pop();

    fs.exists(path, (exists) => {
        let rsp = null;
        if(!exists) {
            res.statusCode = 404;
            console.log(`File ${path} Not Found`);
        } else {
            if (fs.statSync(path).isDirectory()) {
                path += '/index' + ext;
            }

            fs.readFile(path, (err, data) => {
                if(err) {
                    res.statusCode = 500;
                    console.log(err);
                } else {
                    res.setHeader('Content-type', map[ext] || 'text/plain');
                    rsp = data;
                }
            });
            res.end(rsp);
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
