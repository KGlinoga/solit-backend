// // pretty sure these files (under /api) are for PROTECTED ROUTES - which requires JWT now
// // RE: CRUD: we need U and D here (C and R are unprotected, so are in the controllers/index.js)


const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// test Route: GET
// url: port/api/users
router.get('/', (req, res) => {
    res.send("hi!")
});




module.exports = router; 