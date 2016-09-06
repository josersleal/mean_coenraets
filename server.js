// var http = require('http');
// http.createServer(function (req, res) {
//     // body
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello world\n');
// }).listen(3000, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:3000/');

var express = require('express'),
    wines = require('./routes/wines'),
    logger = require('morgan')
bodyParser = require('body-parser');

var app = express();


// app.use(logger, 'dev');
 app.use(bodyParser());

app.get('/', function (req, res) {
    res.send('enter /wines or /wines/Id')
});

app.get('/wines', wines.findAll);

app.get('/wines/:id', wines.findById);

app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);


app.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');