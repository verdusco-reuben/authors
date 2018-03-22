var express = require('express');
var app =  express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist' ));
var path = require('path');
// Require Mongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "quoting_dojo" is the title of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/authorsDB');
// Use native promises
mongoose.Promise = global.Promise;

var DbSchema = new mongoose.Schema({
    name: {type: String, minlength: 3},
},
{
    timestamps: true
});

mongoose.model('Author', DbSchema);
var Author = mongoose.model('Author');

//show all 'Authors' via JSON
app.get('/all', function(req, res){
    Author.find({}, function(err, author){
       res.json(author);
    })
})

//create new user
app.post('/author', function(req,res){
    var author = new Author({name: req.body.name});
    author.save(function(err){
        if(err){
            console.log("something went wrong");
            res.json({message: "Error", error: err})

        }else{
            console.log("SUCCESS NEW USER");
            res.json(author);
        }
    })
})

//get specific user
app.get('/author/:id', function(req, res){
    Author.findById(req.params.id, function(err, author){
        res.json(author);
    })
})

//remove a specific user
app.delete('/author/:id', function(req,res){
    Author.findByIdAndRemove(req.params.id, function(err, user){
        res.json(user)
    })
})

//update a specific user
app.put("/author/:id", function(req, res) {
    Author.findById(req.params.id, function(err, author) {
        author.name = req.body.name;
        author.save(function(err) {
          // if there is an error console.log that something went wrong!
          if (err) {
              res.json({message: "Error", error: err});
          } else {
              res.json(author);
          }
        })
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})