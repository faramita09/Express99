var express = require('express');
var app = express();
const path = require('path');
const fs = require('fs');


let results = []

function getHomePage(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'))
}

function getExchangePage(req, res) {
    res.sendFile(path.join(__dirname, 'exchange.html'))
}

function getConvertPage(req, res) {
    res.sendFile(path.join(__dirname, 'convert.html'))
}

function getGraphPage(req, res) {
    res.sendFile(path.join(__dirname, 'graph.html'))
}

app.use(express.static(__dirname));
app.get('/', getHomePage);
app.get('/exchange', getExchangePage);
app.get('/convert', getConvertPage);
app.get('/graph', getGraphPage);

var server = app.listen(3000, function() {
    console.log('Express is running on port 3000.');
});