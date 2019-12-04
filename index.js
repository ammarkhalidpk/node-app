//importing node framework
var express = require('express');

var app = express();



var falseCompare = 1;
    if (falseCompare == '1'){
        console.log('invalid way of comparison');
    }

let cont = 'this is a string';
let str = 'sample string';
str = cont.substring(1, 3);
if (str !== '') {  
    console.log(str);
}
//123

///test

app.get('/', function (req, res) {
 res.send('Welcome to CI/CD POC');
});
//listen to port 3000 by default
app.listen(3000);
module.exports = app;