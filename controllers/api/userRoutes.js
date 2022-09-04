// // pretty sure these files (under /api) are for PROTECTED ROUTES - which requires JWT now
// // RE: CRUD: we need U and D here (C and R are unprotected, so are in the controllers/index.js)


const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// test Route: GET
// url: port/api/
router.get('/', (req, res) => {
    res.send("hi!")
});

// Updating a user (PUT) protected by Token WORKS
// url: port/api/users/update
router.put("/update", async (req, res) => {
    // console.log(req.body);
    const token = req.headers.authorization.split(" ")[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        // res.json(userData)

        const updateUser = User.update({

            // All the fields you can update and the data attached to the request body.

            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        },
            {
                where: {
                    id: userData.id
                }
            });
        return res.status(200).json({ msg: `We updated your account ${userData.email}!` });

    } catch {
        res.status(403).json({ msg: "invalid token" })
    }
})

// Delete User Route, protected by token, WORKS
//  url: port/api/users/delete
router.delete("/delete", async (req, res) => {
    // console.log(req.body);
    const token = req.headers.authorization.split(" ")[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        // res.json(userData)
        //halp?  
        const leaveSoLit = User.destroy({
            where: {
                id: userData.id
            }
        })
        return res.status(200).json({ msg: `kthxbyeeee ${userData.email}!` })

    } catch {
        res.status(403).json({ msg: "invalid token" })
    }
})


module.exports = router; 