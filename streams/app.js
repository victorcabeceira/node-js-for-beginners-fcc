const fs = require('fs');

/* Useful especially for big files */
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');

/* Extends the eventEmitter, so it has event capabilities */
readStream.on('data', chunk => {
  console.log(chunk);
  writeStream.write(chunk);
});
