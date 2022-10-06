
const User = require('../models/users');
const MongooseHelper = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/dev');
const { normalizeErrors } = require('../helpers/mongoose');

exports.auth = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!password || !email) {
        return res.status(422).json({ error: [{ title: 'Data missing', message: 'couldnot find email or password' }] })
    }

    User.findOne({ email }, (err, existingUsers) => {
        if (err) {
            return res.status(422).json({ error: MongooseHelper.normalizeErrors(err.errors) })
        }

        if (!existingUsers) {
            return res.status(422).json({ error: [{ title: 'Invalid User', message: 'User dosenot exists' }] })
        }

        if (existingUsers.password==password) {
            const token = jwt.sign({
                userId: existingUsers.id,
                userName: existingUsers.username
            }, SECRET, { expiresIn: '1h' });
            return res.json({ token });
        } else {
            return res.status(422).json({ error: [{ title: 'Wrong Detail', message: 'Wrong email or Password ' }] })
        }
    });
}

exports.register = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const passwordconfirmation = req.body.confirmpassword;

    if (!password || !email) {
        return res.status(422).json({ error: [{ title: 'Data missing', message: 'couldnot find email or password' }] })
    }
    if (password != passwordconfirmation) {
        return res.status(422).json({ error: [{ title: 'Invalid Password', message: 'Password is not same as confirmation' }] })
    }

    User.findOne({ email }, (err, existingUsers) => {
        if (err) {
            return res.status(422).json({ error: MongooseHelper.normalizeErrors(err.errors) })
        }
        if (existingUsers) {
            return res.status(422).json({ error: [{ title: 'Invalid Email', message: 'Email already exists' }] })
        }

        const user = new User({
            username,
            email,
            password
        })

        user.save((err) => {
            if (err) {
                return res.status(422).json({ error: MongooseHelper.normalizeErrors(err.errors) })
            }
            return res.json({ username, email });
        });
    });
}

exports.authMiddleware=(req,res,next)=>{
    const token = req.headers.authorization;

  if (token) {
    const user = parseToken(token);

    User.findById(user.userId, function(err, user) {
      if (err) {
        return res.status(422).send({errors: normalizeErrors(err.errors)});
      }

      if (user) {
        res.locals.user = user;
        next();
      } else {
        return notAuthorized(res);
      }
    })
  } else {
    return notAuthorized(res);
  }
}

function parseToken(token){

    return jwt.verify(token.split(' ')[1],SECRET)
}

function notAuthorized(res) {
    return res.status(401).send({errors: [{title: 'Not authorized!', detail: 'You need to login to get access!'}]});
  }