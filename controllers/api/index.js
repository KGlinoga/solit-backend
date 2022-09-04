const express = require("express")
const router = express.Router();
const userRoutes = require("./userRoutes")
const reviewRoutes = require("./reviewRoutes")
const bookRoutes = require("./bookRoutes")


router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/book', bookRoutes);




// const userRoutes = require("./userRoutes")
// // Asiya's code
// // const reviewRoutes = require("./reviewRoutes")
// // const bookRoutes = require("./bookRoutes")

router.use('/review', reviewRoutes);
router.use('/book', bookRoutes);
router.use("/users", userRoutes);
// router.use('/userShelfRoutes');

module.exports = router;

