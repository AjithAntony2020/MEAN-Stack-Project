

const { response } = require('express');
const request = require('request');
const apiOptions =  {     
    server: 'http://localhost:3000'
};



const booklist = function(req, res){
    const path = '/api/books';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body);
    });
};



const _renderHomepage = function(req, res,responseBody){
    console.log(responseBody);
    res.render('list-display',{
        books: responseBody
    });
};





const _renderDetailPage = function(req, res, responseBody){
    res.render('details',{
        currentBook : responseBody
    });
};

const bookinfo = function(req, res){
    const path = `/api/books/${req.params.bookid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(requestOptions, (err, response, body) => {
        _renderDetailPage(req, res, body);
    });
};





const _renderCreatePage = function(req, res){
    res.render('create',{
        title: "Create New book"
    });
};

const addNewBook = function(req, res){
    _renderCreatePage(req, res);
}

const doAddNewBook = function(req, res){
    const path = '/api/books';
    const postdata = {
        name: req.body.name,
        author: req.body.author,
        genre : req.body.genre,
        publisher : req.body.publisher,
        otherinfo : {
            price : req.body.price,
            pages : req.body.pages
        }
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(requestOptions, (err, response, body) => {
        if(response.statusCode === 201){
            res.redirect('/');
        }
    });
};







module.exports = {
    booklist, bookinfo, addNewBook, doAddNewBook
};