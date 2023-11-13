
var express = require("express");

var app = express();


var server = app.listen(9090, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

console.log("Hello world js !!!");
