//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello fuckifdsfnsg aworld');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 4001);

module.exports = app;