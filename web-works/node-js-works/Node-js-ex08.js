// to read the file and zip and store 

const fs = require("fs"); 
const zlib = require("zlib"); 
const gzip = zlib.createGzip();


const readStream = fs.createReadStream('./somefile.txt', 'utf8');
const writeStream = fs.createWriteStream('./somefile3.txt.gz', 'utf8');

// short hand notion of previous program
// readStream.pipe(writeStream);


// we can zip the file and keep 
readStream.pipe(gzip).pipe(writeStream);


