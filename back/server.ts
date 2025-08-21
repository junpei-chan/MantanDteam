const http = require('http');
const { IncomingMessage, ServerResponse } = require('http');

const server = http.createServer((req: typeof IncomingMessage, res: typeof ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Mantan Dteam!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});