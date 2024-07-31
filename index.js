const fs = require('fs')

const http = require('http');
const port = parseInt(process.env.port) || 4000;

const host = 'localhost';
// Create a web server
http.createServer((req, res)=>{
res.writeHead(200, {'Content-type': 'text/plain'});
res.write('hey there')
res.end('Welcome to node js module');
}).listen((port), ()=> {
console.log(`Server is running at port ${port}`);
});

fs.writeFile('data.txt', 'Hey there this is Joels Task', function (err) {
    if (err) throw err;
    console.log(err);
  });

fs.writeFile('data.txt', 'this is me trying to overwrite the previous text', function (err) {
    if (err) throw err;
    console.log(err);
});

fs.appendFile('data.txt', '\nthis is me trying to append data instead of writing to a text file', function (err) {
    if (err) throw err;
    console.log(err);
});



