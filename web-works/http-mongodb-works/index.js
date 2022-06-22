import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


// variable declaration
const app = express();
const PORT = 3000;

// configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));


app.get("/", (req, res) => {
    res.json({ "message": "Welcome" });
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})
