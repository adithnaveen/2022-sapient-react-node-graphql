// to read the file and zip and store 

const fs = require("fs"); 
const zlib = require("zlib"); 
const gzip = zlib.createGzip();
 
const readStream = fs.createReadStream('./ds.pdf');
const writeStream = fs.createWriteStream('./somefile3.gz');

// short hand notion of previous program
// readStream.pipe(writeStream);


// we can zip the file and keep 
readStream.pipe(gzip).pipe(writeStream);


