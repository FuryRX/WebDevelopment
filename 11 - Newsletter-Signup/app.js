const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { closeSync } = require("fs");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/",function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data)
    const apiLocation = "us13"
    const id = "33f59a5536"
    const url = "https://"+ apiLocation+ ".api.mailchimp.com/3.0/lists/"+ id
    const apiKey = "ff8939bb7c13695537e9cec3c1f2dd0a-us13"
    const options = {
        method:"POST",
        auth: "ben:"+ apiKey
    }

    const request = https.request(url,options,function(response){
        response.statusCode

        if (response.statusCode === 200){
            // res.send("Successfully Subscribed");
            res.sendFile(__dirname + "/success.html")
        }else{
            // res.send("There was an error with signing up, please try again.")
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure",function(req,res){
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

