const express = require("express");
const jwt = require("jsonwebtoken");


let app = express();


app.get("/api", (req, res) => {
    res.json({
        msg: "Hello"
    })
})

app.get("/api/protected", ensureToken, (req, res) => {
    jwt.verify(req.token, 'MySecretKey', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                msg: "This is protected route",
                data: data
            });
        }
    });
});

// user login 
app.post("/api/login", (req, res) => {
    // validation of user shall go here, try with yesterday's example 
    const user = {
        userName: 'Sapient',
        password: 'india'
    };
    const token = jwt.sign({ user }, 'MySecretKey');
    res.json({
        token: token
    });

})



function ensureToken(req, res, next) {
    // check for valid token 

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}


app.listen(3000);
