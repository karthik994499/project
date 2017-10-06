const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var a={"name":"karthik kumar","mobile":"8940403090"};

  res.send(a.name)
})

app.listen(5000);
  console.log('Example app listening on port 5000!');
