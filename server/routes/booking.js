const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const bookingController =require('../controllers/booking');
const Booking = require('../models/booking');

router.post('', userController.authMiddleware, bookingController.createBooking);

router.get('/:id', function (req, res) {
    const bookingIds = req.params.id.split(',');
    Booking.find().where('_id').in(bookingIds).select('-user').exec((err, foundBookings) => {
        if (err) {
            res.status(422).json({ error: [{ title: 'Bookings', message: 'couldnot find Bookings' }] })
        }
        res.json(foundBookings);
    });
     
});

module.exports = router;