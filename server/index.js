const express = require('express');;
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const config = require('./config/index');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rental');
const usersRoutes = require('./routes/users');
const bookingsRoutes = require('./routes/booking');
const path = require('path');

mongoose.connect(config.DB_URL).then(() => {
    if (process.env.NODE_ENV !== 'production') {

        const fakeDb = new FakeDb();
        fakeDb.seedDB();
        console.log('conncetion of DB successful');
    }
});
app.use(bodyparser.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/bookings', bookingsRoutes);


    const appPath = path.join(__dirname, '..', 'build');
    app.use(express.static(appPath));

    app.get('*', function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });

const PORT = process.env.PORT || 44571;

app.listen(PORT, () => {
    console.log(`node is running at port ${PORT}`)
});