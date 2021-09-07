const http = require('http');
const pid = require('pid');

http
  .createServer((req, res) => {
    for (let i = 0; i < 1e7; i += 1) {
    }
    res.end('Hello from Node.js\n');
  })
  .listen(8800, () => {
    console.log(`Server started. Pid: ${pid}`);
  })
