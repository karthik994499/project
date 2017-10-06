var cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

app.get('/i',function(req,res)
{

	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/mydb";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var myobj = { name: "Company Inc", address: "Highway 37" };
	  db.collection("customers").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	  });
	}); res.end("Successfully wrote");
})
app.get('/f',function(req,res)
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/mydb";

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		db.collection("customers").findOne({}, function(err, result) {
		    if (err) throw err;
		    console.log(result.name);
		    db.close();
		  });
	}); res.end("Shown ... check console");
})
app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})
