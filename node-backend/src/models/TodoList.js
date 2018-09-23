//TodoList.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var TodoList = new Schema({
    desc: {
        type: String
    },
},{collection:'Task'});

module.exports = mongoose.model('TodoList',TodoList);