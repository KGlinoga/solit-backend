// pretty sure these files (under /api) are for PROTECTED ROUTES - requires JWT?? 
// RE CRUD: we need C, U, and D in here. (R is unprotected so lives in one level up)

const router = require('express').Router();
const { User, UserShelf } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// test Route: GET
// url: port/api/user
router.get('/', (req, res) => {
    res.send("hi!")
});



module.exports = router; 