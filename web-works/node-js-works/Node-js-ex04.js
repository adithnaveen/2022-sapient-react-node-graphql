// program to show working with file system 

const fs = require('fs'); 


fs.writeFile("sample.txt", "This is ssample content", (err) => {
    if(err) {
        console.log("Sorry writing not possible");
    }else {
        console.log("Data Written Successfully..");

        fs.readFile("sample.txt", "utf-8", (err, data) => {
            if(err) {
                console.log("Error Reading file ");
            }else {
                console.log("------ content got is -------");
                console.log(data);
            }
        })
    }
})