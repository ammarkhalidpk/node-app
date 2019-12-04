//importing node framework
var express = require('express');

var app = express();



var falseCompare = 1;
try{
    if (falseCompare == '1'){
        console.log('invalid way of comparison');
    }
}catch(ex){
    throw ex;
}
debugger;

let cont = 'this is a string';
let str;
if ((str = cont.substring(1, 3)) != '') {  
    console.log(str);
}

app.get('/', function (req, res) {
 res.send('Welcome to CI/CD POC');
});
//listen to port 3000 by default
app.listen(3000);
module.exports = app;