//Requiring all the modules
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const express = require("express");

//Creating new app using express
const app = express();

//Set view engine to use ejs
app.set('view engine',ejs);

//Using bodyparser to parse our requests
app.use(bodyParser.urlencoded({
    extended: true
}));

//Use public folder to store our static files
app.use(express.static("public"));

//Use mongoose to connect to our DB
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

//Create new schema for the DB
const articleSchema = {
    title: String,
    content: String 
}

//Create our model
const Article = mongoose.model("Article", articleSchema);


//Route chaining, can do all REST API methods for same route
app.route("/articles")

//Create our get route for our API
.get(function(req,res){
    //Read through our DB 
      Article.find(function(err,foundArticles){
        //Check if error exists
        if (!err){
            res.send(foundArticles);
        } else {
            res.send(err)
        }
    })
})

//Creating the POST Request for the API when client posts to article endpoint
.post(function(req,res){
    console.log(req.body.title);
    console.log(req.body.content);

    //Writes the post requests to the DB as a new document
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    //Saves it to the DB
    newArticle.save(function(err){
        if (!err){
            res.send("Successfully added a new article.");
        } else {
            res.send(err);
        }
    });
    
})

//Create a delete request
.delete(function(req,res){
    // This will delete all articles
    Article.deleteMany(function(err){
        if (!err){
            res.send("Successfully deleted all articles");
        } else {
            res.send(err);
        }
    })
});


//Get specific article
app.route("/articles/:articleTitle")

.get(function(req,res){
    
    Article.findOne({title:req.params.articleTitle}, function(err,foundArticles){
        if (foundArticles){
           res.send(foundArticles) 
        } else {
            res.send("No articles matched.");
        }
    })
})

// Updating data
.put(function(req,res){
    Article.replaceOne(
        {title:req.params.articleTitle},
        {title:req.body.title, content:req.body.content},
        function(err){
            if(!err){
                res.send("Successfully updated article")
            }
        }
    )
})

.patch(function(req,res){
    Article.updateOne(
        {title:req.params.articleTitle},
        req.body,
        function(err){
            if(!err){
                res.send("Successfully updated article")
            } else {
                res.send(err);
            }
        }
    )
})

.delete(function(req,res){
    Article.deleteOne(
        {title:req.params.articleTitle},
        function(err){
        if(!err){
            res.send("Successfully deleted")
        } else {
            res.send(err)
        }
    })
})


//Set app to listen on port 3000
app.listen(3000,function(){
    console.log("Server started on port 3000")
})