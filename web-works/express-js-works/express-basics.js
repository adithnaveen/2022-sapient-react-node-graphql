// requires 
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// variables 
const app = express();
const port = 8000;

// configuration 
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));


// alias for static content 
app.use("/public", express.static(path.join(__dirname, 'static')));

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


// 1. path param + query param - http://localhost:8000/example/101/naveen?empid=101&name=naveen

app.get("/example/:empid/:empname", (req, res) => {
    let empObj = {
        empid: req.params.empid,
        empname: req.params.empname
    };
    console.log(`Data sent is ${empObj.empid}, ${empObj.empname}`);


    console.log(req.query);
    console.log(req.query.order);

});

app.post("/example", (req, res) => {
    let empObj = req.body;

    console.log("Emp Id ", empObj.empid);
    console.log("EmpName ", empObj.empname);
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

let firstHandler = function (req, res) {
    console.log("hi i'm in first handler...");
}

app.get("/example-route", [firstHandler])



app.listen(port, () => {
    console.log("Server started at " + port);
})

