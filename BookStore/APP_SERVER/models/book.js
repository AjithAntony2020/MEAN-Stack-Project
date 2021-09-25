// model for book

var mongoose = require('mongoose');

// subdocument
var bookInfo = new mongoose.Schema({
    price:{type: String, required: true},
    pages: {type: String, required: true},
});

//main document
var bookSchema = new mongoose.Schema({
    name:{type: String, required: true, minLength: 2},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    publisher: {type: String, required: true},
    otherinfo: bookInfo
});

var dbModel = mongoose.model('Book', bookSchema);

module.exports = dbModel;