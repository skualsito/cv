var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/html'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server funcando..."));