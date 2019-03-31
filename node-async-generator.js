const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', async (req, res) => {
  const stream = fs.createReadStream('async.js', {
    highWaterMark: 5
  });
  for await (const chunk of stream) {
    res.write(`Read ${chunk}`);
  }
  res.end('Hello World!');
});

app.listen(3000);
console.log('Server running at 3000 port');
