//Basic static content server
var express = require('express');
var port = 9999;
var host = 'localhost';

//Instance of express
var app = express();

//Views and Engines
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routes
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Index'
    });
});
app.use(express.static('public'));


//Start app
app.listen(port, host, function(err) {
    if (err) {
        console.log('Error');
    }
    console.log('Application listening on port ' + port);
});