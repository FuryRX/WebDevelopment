const express = require("express");

const app = express();

app.get("/api",(req,res) => {
    res.json({"users": ["userOne","userTwo","userThree","userFour"]})
})

app.listen(3001,()=>{
    console.log("You have succesfully reached port 3001");
})