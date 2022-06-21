const express = require("express");

const app = express();
const port = 8000;
// we can create the routes 

app.get("/", (req, res) => {
    console.log("hello first line ")
    res.send("Welcome to express JS");
});

app.get("/example", (req, res) => {
    res.send("This is in example URI");
});

// hello, heppo
app.get("/he**o", (req, res) => {
    res.send("this should for hello heppo, and auto relod");
});


// 1. path param - http://localhost:8000/example/101/naveen
// 2. query param - http://localhost:80000/example?empid=101&name=naveen
app.get("/example/:empid/:empname", (req, res) => {
    let empObj = {
        empid: req.params.empid,
        empname: req.params.empname
    };
    console.log(`Data sent is ${empObj.empid}, ${empObj.empname}`);
})

app.listen(port, () => {
    console.log("Server started at " + port);
})

