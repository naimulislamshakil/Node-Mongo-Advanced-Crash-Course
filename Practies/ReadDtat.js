const http = require('http');
const fs = require('fs');
const PORT = 5000;

const server = http.createServer((req, res) => {
	// Read File Using Fail System.....
	// if (req.url === '/') {
	// 	fs.readFile('data.txt', (err, data) => {
	// 		if (err) {
	// 			res.write('Faild to read data.');
	// 			res.end();
	// 		} else {
	// 			res.write(data);
	// 			res.end();
	// 		}
	// 	});
	// }
	// Write File Using Fail System.....
	// fs.writeFile('data.txt', 'Hellow Naimul Islam. ', (err) => {
	// 	if (err) {
	// 		res.write('Data Read Unsuccessfull.');
	// 		res.end();
	// 	}
	// });
	// Append File Using Fail System.....
	// fs.appendFile('data.txt', 'Naimul, How are you?', (err) => {
	// 	if (err) {
	// 		res.write('Data Append UnsuccesssFull');
	// 	}
	// });

	res.write('<h1>How are you?</h1>');
});

server.listen(PORT);

console.log(`Server is Running: ${PORT}`);
console.log(fs);
