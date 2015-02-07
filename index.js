var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/app/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/app/' + req.params.name));
});

app.get('/home/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/home/' + req.params.name));
});

app.get('/img/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/img/' + req.params.name));
});

app.get('/lib/css/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/lib/css/' + req.params.name));
});

app.get('/lib/fonts/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/lib/fonts/' + req.params.name));
});

app.get('/lib/fonts/opensans_regular_macroman/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/lib/fonts/opensans_regular_macroman/' + req.params.name));
});

app.get('/lib/js/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/lib/js/' + req.params.name));
});

app.get('/patterns/:name', function(req, res) {
    console.log("dirname:" + __dirname);
    res.sendFile(path.join(__dirname + '/patterns/' + req.params.name));
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Patternize listening at http://%s:%s', host, port);
});