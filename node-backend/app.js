var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//server configuration
var basePath = '/todo';
var port = 6200;

mongoose.connect('mongodb://mongo-db:27017/todo',{ useNewUrlParser: true })
    .then(() => {
        console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend Error:',err.stack);
        process.exit(1);
    });

var todoListRoutes = require('./src/routes/todoListRoutes');

// App Instance
var app = express();
app.use(express.static('public'));
app.use(cors());
//app.options('/add', cors());
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
});
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(basePath, todoListRoutes);



//Execute App
app.listen(port, () => {
    console.log('TodoList Backend running on Port: ',port);
});

