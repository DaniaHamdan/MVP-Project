var express = require('express');
var app = express();
// start listening to requests on port 8000
app.use(express.static(__dirname+"/puplic"))
app.get('/contactlist',function(req,res){
	console.log("i recevied a get reqyest ")
})
app.listen(8000,function(){
	console.log("server running on port 8000")
});

// export our app for testing and flexibility, required by index.js
module.exports = app;