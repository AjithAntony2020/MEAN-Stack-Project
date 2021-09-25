//api controller for books


const mongoose = require("mongoose");
const Book = mongoose.model('Book');

// controller functions
const getBooks = function(req, res){
   
    Book.find().exec(function(err, bookdata){
        if(err){
            res
            .status(404)
            ,json(err);
            return;
        }
        res
        .status(200)
        .json(bookdata);
    });


};

const createBook = function(req, res){
    
    Book.create({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        publisher: req.body.publisher,
        otherinfo: req.body.otherinfo

    }, (err, bookdata) => {
        if(err){
            res
            .status(404)
            ,json(err);
            return;
        }
        else{
            res
            .status(201)
            .json(bookdata);
        }
    })
};

const getSingleBook = function(req, res){
    Book.findById(req.params.bookid)
    .exec(function(err, bookdata) {
        if(err){
            res
            .status(404)
            ,json(err);
            return;
        }
        else{
            res
            .status(203)
            .json(bookdata);
        }
    });
};

const updateBook= function(req, res){
    if(!req.params.bookid){
        res
        .status(404)
        .json({"message": "Not Found. Book ID is required." });
    return;
    }
    Book.findById(req.params.bookid)
        .exec((err, bookdata) => {
            if(!bookdata){
                res
                .status(404)
                .json({"message": "Book ID not found"});
                return;
            }
            else if(err){
                res
                .status(400)
                .json(err);
                return;
            }
            bookdata.name = req.body.name;
            bookdata.author = req.body.author;
            bookdata.genre = req.body.genre;
            bookdata.publisher = req.body.publisher;
            bookdata.otherinfo = req.body.otherinfo;
            bookdata.save((err, bookdata) => {
                if(err){
                    res
                    .status(400)
                    .json(err);
                    return;
                }else{
                    res
                    .status(200)
                    .json(bookdata);
                }
            });
        });
};

const deleteBook = function(req, res){
    
    const bookid = req.params.bookid;

    if(bookid){
        Book.findByIdAndDelete(bookid)
        .exec((err, bookdata) => {
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }
            res
            .status(204)
            .json(null);
        });
    }
    else{
        res
        .status(404)
        .json({"message": "No Book ID"});
    }
};

module.exports = {
    getBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook
};