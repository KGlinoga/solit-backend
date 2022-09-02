// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const { User, UserShelf, Review, Book } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

// router.use((req, res) => {
//     res.send("<h1>Wrong Wroute!<h1>")
// });

router.get('/', (req, res) => {
    res.send("welcome!")
});

// Public USER routes (Create/Sign Up*, Log in, View)

// CREATE USER/SIGNING UP
// URL: port/signup
router.post("/signup", (req, res) => {
    User.create(req.body).then(newUser => {
        const token = jwt.sign({
            id: newUser.id,
            email: newUser.email
        }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        })
        return res.json({
            token: token,
            user: newUser
        })
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })
})

// LOGGING IN
// url: port/login
router.post('/login', (req, res) => [
    User.findOne({
        where: {
            email:req.body.email
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(401).json({msg:"invalid login credentials!"})
        }
        else if (!bcrypt.compareSync(req.body.password,foundUser.password)) {
            return res.status(401).json({ msg: "invalid login credentials!" })
        } else {
            const token = jwt.sign({
                id: foundUser.id,
                email: foundUser.email
            }, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })
            return res.json({
                token: token,
                user: foundUser
        })
        }
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })
])


// gets all users, includes their shelves
//  url: port/users
router.get('/users', (req, res) => {
    // Get all users from the user table
    User.findAll({
        include: [{
            model: UserShelf,
            as: 'userShelves'
        }]
    }).then((userData) => {
        res.json(userData);
    });
});

// GET a single user WITH their shelves
// url: port/users/userIDNUMBER
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


// How to have protected routes(Must be logged in to use)
// url: port/protected
router.get('/protected', (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        res.json({msg:`Welcome to your library ${userData.email}!  It's SO LIT!`})
    } catch {
        res.status(403).json({msg:'invalid token'})
    }
})

// Public UserShelf Routes: 

// gets all shelves
// url: port/shelves
router.get('/shelves', (req, res) => {
    // Get all books from the book table
    UserShelf.findAll().then((userShelfData) => {
        res.json(userShelfData);
    });
});

// get shelf by userID
// url: port/users/userIDNUMBER/shelfIDNUMBER
router.get('/users/:id/:shelf_id', (req, res) => {
    UserShelf.findByPk().then((userShelfData) => {
        res.json(userShelfData);
    });
});
        
// tester route for connecting w/ React FE!
// url: port/hello
router.get('/hello', (req, res) => {
    res.json({msg:'hello from express!'})
})



module.exports = router;