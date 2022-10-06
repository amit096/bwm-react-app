const express = require('express');;
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const bodyparser =require('body-parser');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rental');
const usersRoutes = require('./routes/users');
const bookingsRoutes =require('./routes/booking');

mongoose.connect(config.DB_URL).then(() => {
   const fakeDb = new FakeDb();
  // fakeDb.seedDB();
    console.log('conncetion of DB successful');
});
app.use(bodyparser.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/bookings', bookingsRoutes);

app.listen(PORT, () => {
    console.log(`node is running at port ${PORT}`)
});