// to work with HTTP Module 

const http = require("http"); 



const server = http.createServer((req,res) => {
    // by default it  will host on the root 
    // res.write("Hi this is from NodeJS");
    // res.end();

    if(req.url ==='/') {
        res.write("Hi this is from NodeJS at Root ");
        res.end();
    }else{
        res.write("Hi this is from NodeJS at Not At Root");
        res.end();
    }
});



server.listen(3000, () => {
    console.log("Server started on 3000");
})