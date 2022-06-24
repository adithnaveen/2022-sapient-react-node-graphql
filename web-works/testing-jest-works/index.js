const express = require("express"); 

const PORT= 3000; 
const app = express(); 

app.get("/api/test", (req, res) => {
    res.send("Test");
})


app.listen(PORT, () => {
    console.log("Server started at ", PORT);
})