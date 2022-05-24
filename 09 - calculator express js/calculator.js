const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var results = num1 + num2;

    res.send("The result of the calculation is "+ results);
});



app.post("/bmicalculator",function(req,res){

    var weight = (req.body.weight);
    var height = (req.body.height);
    
    var BMI= weight/Math.pow(height,2);
    console.log("Your BMI is" + BMI)
    res.send("Your BMI is " + BMI);
});

app.listen(3000,function(){
    console.log("Welcome to the server");
});