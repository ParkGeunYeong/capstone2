const router = require('express').Router();
var bodyParser = require('body-parser');

var Concert = require('../models/concert');

router.use(bodyParser.urlencoded({ extended:true }));

// GET ALL BOOKS
router.get('/', function (req, res) {
    let query = req.query.page || 0;
    let queryInt = parseInt(query);
    if(typeof(queryInt) === 'number') {
        queryInt *= 6;
    }
    else {
        queryInt = 0;
    }
    console.log(queryInt);
    Concert.find({}, null, { skip: queryInt, limit: 6 },function (err, concerts) {
        if (err) return res.status(500).send({ error: 'database failure' });
        res.json(concerts);
    });
});

// GET SINGLE BOOK
router.get('/api/books/:book_id', function (req, res) {
    res.end();
});

// GET BOOK BY AUTHOR
router.get('/api/books/author/:author', function (req, res) {
    res.end();
});

// CREATE BOOK
// app.post('/api/books', function(req, res){
//     var concert = new Concert();
//     concert.title = req.body.title;
//     concert.venue = req.body.venue;
//     concert.start_data = new Date(req.body.start_data);
//     concert.end_data = new Data(req.body.end_data);

//     concert.save(function(err) {
//       if(err) {
//         console.error(err);
//         res.json({result: 0});
//         return;
//       }
//       res.json({result: 1});
//     })
// });

// UPDATE THE BOOK
router.put('/api/books/:book_id', function (req, res) {
    res.end();
});

// DELETE BOOK
router.delete('/api/books/:book_id', function (req, res) {
    res.end();
});

module.exports = router;