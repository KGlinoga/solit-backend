const router = require('express').Router();
const {User, UserShelf} = require('../models');
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.send("<h1>Wrong Wroute!<h1>")
// });

// router.get('/', (req, res) => res.json(req.body.Book));

// router.get('/users', (req, res) =>
//     res.json(req.body.User));

router.get('/users', (req, res) => {
    // Get all books from the book table
    User.findAll().then((userData) => {
        res.json(userData);
    });
});

router.get('/shelves', (req, res) => {
    // Get all books from the book table
    UserShelf.findAll().then((userShelfData) => {
        res.json(userShelfData);
    });
});

// GET a single user
router.get('/users/:id', (req, res) => {
    // Get all books from the book table
    User.findByPk(req.params.id, {
        include: [{
            model: UserShelf, 
            as: 'userShelves'
        }]
    }).then((userData) => {
        res.json(userData);
    });
});

        

module.exports = router;