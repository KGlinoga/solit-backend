const express = require("express")
const router = express.Router();
const userRoutes = require("./userRoutes")
const reviewRoutes = require("./reviewRoutes")
const bookRoutes = require("./bookRoutes")
const userShelfRoutes = require('./userShelfRoutes')
const dailyDiaryRoutes = require('./dailyDiaryRoutes')


router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/book', bookRoutes);
router.use('/userShelfRoutes', userShelfRoutes);
router.use('/diary', dailyDiaryRoutes)


module.exports = router;

