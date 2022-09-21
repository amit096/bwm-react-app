const express = require('express');
const router = express.Router();
const Rental = require('../models/rental')
const userController = require('../controllers/user');

router.get('/secret', userController.authMiddleware, function (req, res) {
    res.json({ "secret": true });
});

router.get('', function (req, res) {
    Rental.find({}, function (err, foundRentals) {
        res.json(foundRentals);
    });
});

router.get('/:id', function (req, res) {
    const rentalId = req.params.id;
    Rental.findById(rentalId, function (err, foundRentals) {
        if (err) {
            res.status(422).json({ error: [{ title: 'Rentals', message: 'couldnot find Rentals' }] })
        }
        res.json(foundRentals);
    });
});


module.exports = router;