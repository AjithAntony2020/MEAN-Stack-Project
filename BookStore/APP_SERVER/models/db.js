//coonection code to mongo db

var mongoose = require('mongoose');

var dbURI = 'mongodb+srv://ajith:ajith@cluster0.8iun8.mongodb.net/';


mongoose.connect(dbURI, {    dbName: 'bookDB',     useNewUrlParser: true,     useUnifiedTopology: true});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {  
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

require('./book');