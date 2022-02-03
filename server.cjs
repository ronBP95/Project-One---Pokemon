const express = require('express');
const req = require('express/lib/request');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// js, assets, css
app.use(express.static(__dirname + 'public/css'));
app.use('*/js',express.static('public/javascript'));
app.use('*/images',express.static('public/assets'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
