// pretty sure these files (under /api) are for PROTECTED ROUTES - requires JWT?? 
// RE CRUD: we need C, U, and D in here. (R is unprotected so lives in one level up)

const router = require('express').Router();
const { User, UserShelf } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GET all shelves
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
        UserShelf.create(req.body

        )
        return res.status(200).json({ msg: `We added your shelf ${userData.email}!` })

    } catch {
        res.status(403).json({ msg: "invalid token" })
    }
})


// // Updating a shelf (PUT) protected by Token DOES NOT WORK @ noon Sunday
// // url: port/api/userShelfRoutes/update
// router.put("/update", async (req, res) => {
//     // console.log(req.body);
//     const token = req.headers.authorization.split(" ")[1]
//     try {
//         const userData = jwt.verify(token, process.env.JWT_SECRET)
//         // res.json(userData)

//         const updateUserShelf = await UserShelf.findOneAndUpdate({

//             // All the fields you can update and the data attached to the request body.

//             shelf_name: req.body.shelf_name,
//             shelf_desc: req.body.shelf_desc,
//             have_read: req.body.have_read
//         },
//             {
//                 where: {
//                     id: userData.id
//                 }
//             });
//         return res.status(200).json({ msg: `We updated your account ${userData.email}!` });

//     } catch {
//         res.status(403).json({ msg: "invalid token" })
//     }
// })


// // Delete UserShelf Route, protected by token, first try noon-ish Sunday
// //  url: port/api/userShelf/delete
// router.delete("/delete", async (req, res) => {
//     // console.log(req.body);
//     const token = req.headers.authorization.split(" ")[1]
//     try {
//         const userData = jwt.verify(token, process.env.JWT_SECRET)
//         // res.json(userData)
//         //halp?  
//         const leaveSoLit = User.destroy({
//             where: {
//                 id: userData.id
//             }
//         })
//         return res.status(200).json({ msg: `kthxbyeeee ${userData.email}!` })

//     } catch {
//         res.status(403).json({ msg: "invalid token" })
//     }
// })

module.exports = router; 