
const Rental = require('./models/rental');
const User = require('./models/users');

class FakeDb {
    constructor() {
        this.rentals = [{
            title: "Nice view on ocean",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 43
        },
        {
            title: "Modern apartment in center",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            dailyRate: 11
        },
        {
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 23
        }]

        this.User=[{
            username:"Amit",
            email:"amit.rath@gmail.com",
            password:"password"
        },{
            username:"Amit Test",
            email:"amitrath@gmail.com",
            password:"password"
        }]
    }

    async cleanDb() {
        await User.deleteMany({});
        await Rental.deleteMany({});
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