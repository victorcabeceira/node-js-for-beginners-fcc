const fs = require('fs');
const zlib = require('zlib');

const gunzip = zlib.createGunzip();

/* Creates the file */
// const readStream = fs.createReadStream('./example.txt', 'utf8');
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

/* You can pipe several pipes */
readStream.pipe(gunzip).pipe(writeStream);
