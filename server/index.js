const express = require('express');;
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rental');

mongoose.connect(config.DB_URL).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDB();
});
app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
    console.log(`node is running at port ${PORT}`)
});