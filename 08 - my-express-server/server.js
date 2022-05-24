const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello world</h1>")
});

app.get("/contact",function(req,res){
    res.send("Contact me at this page")
})

app.get("/about",function(req,res){
    res.send("This is the about me page")
})

app.get("/test",function(req,res){
    res.send("This is the test me page")
});

app.get("/fun",function(req,res){
    res.send("This is the test me page")
});

app.listen(3000,function(){
    console.log("Server has started on port 3000")
});

