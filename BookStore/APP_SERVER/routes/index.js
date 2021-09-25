var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Store' });
});




const ctrlAbout = require('../controllers/aboutController');
const ctrlBooks = require('../controllers/booksController');

/* GET home page. */
router.get('/list', ctrlBooks.booklist);
router.get('/about', ctrlAbout.about);

router.get('/books/:bookid', ctrlBooks.bookinfo);
router.route('/new')
        .get(ctrlBooks.addNewBook)
        .post(ctrlBooks.doAddNewBook);


module.exports = router;
