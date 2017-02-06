var db = require('mongojs-models')(contactlist);

var contact = new db.Schema({
  name: String,
  email: String,
  number: integr
});
 
// Instantiate your Model class for the 'users' collection 
var User = new db.Model('users', contact);