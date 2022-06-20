var http = require('http');
var fs = require('fs');
var url = require('url');

const { parse } = require('querystring');



http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    if (request.method === 'POST' && pathname === '/validate') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(
                parse(body)
            );
            response.end('ok');
        });
    } else if (request.method === 'GET' && pathname === '/login-form.html') {
        const readStream = fs.createReadStream('./login-form.html');
        response.writeHead(200, { 'content-type': 'text/html' });
        readStream.pipe(response);

    } else if (request.method === 'POST' && pathname === '/') {

        // Read the requested file content from file system
        fs.readFile(pathname.substr(1), function (err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.write("File Not Found");

            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data.toString());
            }
            response.end();
        });
    }
}).listen(3000);
