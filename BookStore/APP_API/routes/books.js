//routes 

var express = require('express');
var router = express.Router();

var ctrlBook = require('../controllers/book');

router.get('/books', ctrlBook.getBooks);
router.post('/books', ctrlBook.createBook);
router.get('/books/:bookid', ctrlBook.getSingleBook);
router.put('/books/:bookid', ctrlBook.updateBook);
router.delete('/books/:bookid', ctrlBook.deleteBook);

module.exports = router;