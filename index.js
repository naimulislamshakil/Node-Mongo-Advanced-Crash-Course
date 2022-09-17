const http = require('http');
const fs = require('fs');
const PORT = 5000;

const server = http.createServer((req, res) => {
	res.write('<h1>How are you?</h1>');
});

server.listen(PORT);

console.log(`Server is Running: ${PORT}`);
// console.log(fs);
