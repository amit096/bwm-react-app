const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    max:[32,'Too long,Max is 32 characters'],
    min :[4,'Too short, min is 4 characters']
  },
  email:{
    type: String,
    max:[32,'Too long,Max is 32 characters'],
    min :[4,'Too short, min is 4 characters'],
    unique:true,
    lowercase:true,
    required:'Email is required',
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password:{
    type: String,
    max:[32,'Too long,Max is 32 characters'],
    min :[4,'Too short, min is 4 characters'],
    required:'Password is required'
  },
  rentals:[{type:Schema.Types.ObjectId,ref:'Rental'}],
  bookings:[{type:Schema.Types.ObjectId,ref:'Booking'}],
});

userSchema.pre('save',(next)=>{
    const user=this;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            user.password=hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', userSchema);