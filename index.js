const http = require('http');
// const url = require('url');
const PORT = 5000;

const server = http.createServer((req, res) => {
	res.end('How are you?');
});

server.listen(PORT);

console.log(`Server is Running: ${PORT}`);
// console.log(url.parse);
