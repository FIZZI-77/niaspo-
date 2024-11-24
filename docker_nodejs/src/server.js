const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 80;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', req.url); // используем папку 'public'

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
