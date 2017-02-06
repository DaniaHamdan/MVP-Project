var express = require('express');
var app = express();
var mongojs=require('mongojs') //this is an liprary from mongodb
var db=mongojs('contactlist',['contactlist'])
var bodyParser=require("body-parser")

app.use(express.static(__dirname+"/client"))
  app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) //this for take the body content
require('./client/routes.js')(app, express);

var port = 8000;
app.listen(process.env.PORT || port,function(){
	console.log("server running on port  "+port)
});
module.exports = app;