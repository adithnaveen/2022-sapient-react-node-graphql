// given the folder to delete the files in it. 


const fs = require('fs'); 


// read the directory and remove the files
// fs.readdir('myfolder', (err, files) => {
//     if(err) {
//         console.log("Sorry err " , err);
//     }else {
//        for(let file of files) {
//         fs.unlink('./myfolder/'+ file, (err) => {
//             if(err) {
//                 console.log("Error deleting"); 
//             }else {
//                 console.log("delete file... ");
//             }
//         })
//        }
//     }
// })

// rmdir will work well when there no content in the diretory,
fs.rmdir('myfolder', (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log("folder deleted...");
    }
});

