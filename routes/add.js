var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here

   res.render('add', data);

   var newfriend = {
        "name": req.query.name,
        "description": req.query.description,
        "imageURL": "http://www.nndb.com/people/453/000025378/bsaget2-sm.jpg"

   };

   data["friends"].push(newfriend);
 }