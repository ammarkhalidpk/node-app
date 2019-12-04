//importing node framework
var express = require('express');

var app = express();

alert("");
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Welcome to CI/CD POC');
});
//listen to port 3000 by default
app.listen(3000);
 
module.exports = app;