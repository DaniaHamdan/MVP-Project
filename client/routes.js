
var mongojs=require('mongojs')
var db=mongojs('contactlist',['contactlist'])//
//var bodyParser=require("body-parser")

module.exports = function (app, express) {
app.get('/contactlist',function(req,res){
	console.log("hiii")

	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post("/contactlist",function(req,res){
	console.log(req.body)
	db.contactlist.insert(req.body,function(err,doc){
	res.json(doc);
	});
});

app.delete('/contactlist/:id',function(req,res){
	var id=req.params.id;
	console.log(id)
	db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,data){
		res.json(data);
	})
});

app.get("/contactlist/:id",function(req,res){
	var id=req.params.id;
	console.log(id)
	db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,data){
		res.json(data)
	});
});

app.put('/contactlist/:id',function(req,res){
	var id=req.params.id;

	db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{name:req.body.name,email:req.body.email,number:req.body.number}},
		new:true},function(err,data){
			res.json(data)
		});

});

}