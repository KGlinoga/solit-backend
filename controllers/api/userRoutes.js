// // pretty sure these files (under /api) are for PROTECTED ROUTES - which requires JWT now
// // RE: CRUD: we need U and D here (C and R are unprotected, so are in the controllers/index.js)


const router = require('express').Router();
const { User } = require('../../models');

// test Route: GET
// url: port/api/userget
router.get('/', (req, res) => {
    res.send("welcome!")
});

// router.get('/', async (req, res) => {
//     try {
//         const userData = await User.findAll({

//         });

//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(400).json(err);
//     };

// });


// user Update (PUT)
// url: Port/api/userupdate



// user Delete (DELETE)
// url: Port/api/userupdate








module.exports = router; 