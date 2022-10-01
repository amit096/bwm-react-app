
const { normalizeErrors } = require('../helpers/mongoose');
const Booking = require('../models/booking');
const Rental = require('../models/rental');
const moment = require('moment');
const User = require('../models/users');

exports.createBooking = (req, res) => {
    const { startAt, endAt, totalPrice, guests, days, rental } = req.body;
    const user = res.locals.user;
    const booking = new Booking({ startAt, endAt, totalPrice, guests, days });

    Rental.findById(rental._id).populate('bookings').populate('user').exec((err, foundRental) => {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }

        if (foundRental.user.id == user.id) {
            return res.status(422).json({ error: [{ title: 'InValid User!!', message: 'Canont create a booking on your own property' }] });
        }

        if (isValidBooking(booking, foundRental)) {

            booking.user = user;
            booking.rental = foundRental;
            foundRental.bookings.push(booking);

            booking.save((err) => {
                if (err) {
                    return res.status(422).send({ errors: normalizeErrors(err.errors) });
                }
                foundRental.save();
                User.update({ _id: user.id }, { $push: { bookings: booking } }, (err) => {
                    return res.status(422).send({ errors: normalizeErrors(err.errors) });
                });
            });
            return res.json({ startAt: booking.startAt, endAt: booking.endAt });
        } else {
            return res.status(422).json({ error: [{ title: 'InValid Booking!!', message: 'Booking dates already taken' }] });
        }

    })
}

function isValidBooking(booking, rental) {
    let isValid = true;

    if (rental.bookings && rental.bookings.length > 0) {
        isValid = rental.bookings.every((bookings) => {
            const pStart = moment(booking.startAt);
            const pEnd = moment(booking.endAt);
            const aStart = moment(bookings.startAt);
            const aEnd = moment(bookings.endAt);

            if ((aStart < pStart && aEnd < pStart) || (pEnd < aEnd && pEnd < aStart)) {
                return true;
            } else {
                return false;
            }
        })
    }
    return isValid;
}