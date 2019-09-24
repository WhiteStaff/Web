const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {

// Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-Control-Allow-Origin');

  next();
});
/* GET home page. */
app.get('/', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017/DB", (err, database) => {
    if (err) return console.log(err);
    const db = database.db('DB');
    db.collection("files").find().toArray(function(err, results){
      res.json(results);
    });
  });

});
app.post('/', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017/DB", (err, database) => {
    if (err) return console.log(err);
    const db = database.db('DB');
    console.log(req.body);

    if(req.body._id){
      db.collection("files").updateOne(
          {name: req.body.name},              // критерий выборки
          { $set: {input: req.body.input}}, function(err, result){
        if(err){
          return console.log(err);
        }
        console.log(result.ops);
        res.sendStatus(200);
      });
    }else {
      db.collection("files").insertOne({name: req.body.name, input:req.body.input},function(err, result) {
        if (err) {
          return console.log(err);
        }
        console.log(result.ops);
        res.sendStatus(200)
      })
      }
  });
});
app.listen(3000);


