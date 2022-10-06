
const Rental = require('./models/rental');
const User = require('./models/users');
const Booking = require('./models/booking');

const fakeDbData = require('./data.json');

class FakeDb {
    constructor() {
        this.rentals = fakeDbData.rentals;
        this.User = fakeDbData.users;
    }

    async cleanDb() {
        await User.deleteMany({});
        await Rental.deleteMany({});
        await Booking.deleteMany({});
    }
    pushRentalsToDb() {
        const user = new User(this.User[0]);
        this.rentals.forEach((rental) => {
            const newRentals = new Rental(rental);
            newRentals.user = user;
            user.rentals.push(newRentals);
            newRentals.save();
        })

        user.save();
    }

    async seedDB() {
        await this.cleanDb();
        this.pushRentalsToDb();
    }
}


module.exports = FakeDb;