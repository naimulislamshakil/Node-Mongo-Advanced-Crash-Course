const http = require('http');
// const url = require('url');
const PORT = 5000;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>This is Home Page.</h1>');
	} else if (req.url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>This is About Page.</h1>');
	} else if (req.url === '/contuct') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>This is Contuct Page.</h1>');
	} else if (req.url === '/product') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>This is Product Page.</h1>');
	} else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1>Page Not Found.</h1>');
	}
});

server.listen(PORT);

console.log(`Server is Running: ${PORT}`);
// console.log(url.parse);
