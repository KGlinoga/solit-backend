// // pretty sure these files (under /api) are for PROTECTED ROUTES - which requires JWT now
// // RE: CRUD: we need U and D here (C and R are unprotected, so are in the controllers/index.js)


const router = require('express').Router();
const { User } = require('../../models');

// test Route: GET
// url: port/api/userget
router.get('/', (req, res) => {
    res.send("welcome!")
});


// user Update (PUT)
// url: Port/api/users/:id/update


router.put('/:id/update', (req, res) => {
    // Calls the update method on the User model
    User.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
           
        },
        {
            // Gets the user based on the username given in the request parameters
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedUser) => {
            // Sends the updated book as a json response
            res.json(updatedUser);
        })
        .catch((err) => res.json(err));
});

// update trial w/ JWT:
// How to have protected routes(Must be logged in to use)
// url: port/users/:id/update
router.put('/:id/update', (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        res.json({ msg: `Welcome to your library ${userData.email}!  It's SO LIT!` })
        User.update(
            {
                // All the fields you can update and the data attached to the request body.
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,

            },
            {
                // Gets the user based on the username given in the request parameters
                where: {
                    id: req.params.id,
                },
            }
        )
            .then((updatedUser) => {
                // Sends the updated book as a json response
                res.json(updatedUser);
            })
    } catch {
        res.status(403).json({ msg: 'invalid token' })
    }
})


// user Delete (DELETE)
// url: Port/api/users/
router.delete('/user-from-token', (req, res) => {
    // Looks for the users based on id given in the request parameters and deletes the instance from the database
    //     User.destroy({
    //         where: {
    //             id: req.params.id,
    //         },
    //     })
    //         .then((deletedUser) => {
    //             res.json(deletedUser);
    //         })
    //         .catch((err) => res.json(err));
    // });
    const token = req.headers.authorization.split(" ")[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        User.destroy(userData.id, {

        }).then(userData => {
            res.json(userData)
        }).catch(err => {
            res.status(500).json({ msg: "an error occurred", err })
        })
    } catch {
        res.status(403).json({ msg: "invalid token" })
    }
});

// get user by token (why tf would we want this??)
// url: port/api/users/user-from-token
router.get("/user-from-token", (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        User.destroy(userData.id, {

        }).then(userData => {
            res.json(userData)
        }).catch(err => {
            res.status(500).json({ msg: "an error occurred", err })
        })
    } catch {
        res.status(403).json({ msg: "invalid token" })
    }
})





module.exports = router; 