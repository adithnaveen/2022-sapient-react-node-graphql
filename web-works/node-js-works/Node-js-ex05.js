// to do file operations

const fs = require('fs'); 

// fs.rename('sample.txt', 'new-sample.txt', (err) => {
//     if(err) {
//         console.log("Sorry file not found");
//     }else {
//         console.log("Rename Successfully done...");
//     }
// })

// appending the file content 
// fs.appendFile('sample.txt', 'this is new content', (err) => {
//     if(err) {
//         console.log("Appending not done");
//     }else {
//         console.log("file updated successfully...");
//     }
// })

// delete the file 
fs.unlink('new-sample.txt', (err) => {
    if(err) {
        console.log("File not found to delete", err);
    }else {
        console.log("File deleted...");
    }
})