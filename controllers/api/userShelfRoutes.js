// pretty sure these files (under /api) are for PROTECTED ROUTES - requires JWT?? 
// RE CRUD: we need C, U, and D in here. (R is unprotected so lives in one level up)

const router = require('express').Router();
const { User, UserShelf } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// test Route: GET
// url: port/api/userShelfRoutes
router.get('/', (req, res) => {
    UserShelf.findAll().then((userShelfData) => {
        res.json(userShelfData);
    });
});

// Create a Shelf - POST - JWT PROTECTED
// url: port/api/userShelfRoutes/newShelf
router.post("/newShelf", async (req, res) => {
    // console.log(req.body);
    const token = req.headers.authorization.split(" ")[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        // res.json(userData)
        //halp?  
        UserShelf.create(req.body)
        return res.status(200).json({ msg: `We added your shelf ${userData.email}!` })

    } catch {
        res.status(403).json({ msg: "invalid token" })
    }
})


module.exports = router; 