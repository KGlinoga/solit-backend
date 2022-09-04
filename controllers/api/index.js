const express = require("express")
const router = express.Router();
const userRoutes = require("./userRoutes")
const reviewRoutes = require("./reviewRoutes")
const bookRoutes = require("./bookRoutes")
const userShelfRoutes = require('./userShelfRoutes')


router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/book', bookRoutes);

router.use('/book', bookRoutes);
router.use('/userShelfRoutes', userShelfRoutes);


module.exports = router;

