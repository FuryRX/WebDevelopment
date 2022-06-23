const express = require("express");

const app = express();


app.get("/api",(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree","userFour"]})
})

app.listen(3001,()=>{
    console.log("Server Started on port 3001")
})