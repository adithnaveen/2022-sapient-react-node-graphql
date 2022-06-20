// read and write with stream 
const fs = require('fs'); 

const readStream = fs.createReadStream('./somefile.txt','utf-8');
const writeStream = fs.createWriteStream('./somefile2.txt','utf-8');


// we have to take the data in to form of chunk
// since its a readStream all data is not read in single go 


readStream.on('data', (chunk) => {
    console.log("---- "+chunk);
    writeStream.write(chunk);
})