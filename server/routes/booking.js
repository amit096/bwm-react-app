const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const bookingController =require('../controllers/booking');

router.get('', userController.authMiddleware, bookingController.createBooking);

module.exports = router;