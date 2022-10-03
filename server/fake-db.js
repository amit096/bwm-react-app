
const Rental = require('./models/rental');
const User = require('./models/users');
const fakeDbData = require('./data.json');
const Booking = require('./models/booking');

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
        const user=new User(this.User[0]);
        const user1=new User(this.User[1]);
        this.rentals.forEach((rental) => {
            const newRentals = new Rental(rental);
            newRentals.user=user;
            user.rentals.push(newRentals);
            newRentals.save();
        })

        user.save();
        user1.save();
    }

    async seedDB() {
        await this.cleanDb();
        this.pushRentalsToDb();
    }
}


module.exports = FakeDb;