// to read the file and zip and store 

const fs = require("fs"); 
const zlib = require("zlib"); 
const gunZip = zlib.createGunzip();
 
const readStream = fs.createReadStream('./somefile3.gz');
const writeStream = fs.createWriteStream('./uncompress-text-book-ds.pdf');


readStream.pipe(gunZip).pipe(writeStream);


