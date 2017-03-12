const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timeStamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timeStamp}, config.secret);
}

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;


    // See if user with given email exists
    User.findOne({email: email}, function (err, existingUser) {
        if (err) {
            return next(err);
        }

        if (!email || !password) {
            return res.status(422).send({error: 'You must provide email and password'});
        }

        // If an user with email does exist, return an error
        if (existingUser) {
            return res.status(422).send({error: 'Email is in use '});
        }

        // If an user with email does NOT exist, create and save user record
        // Create user
        const user = new User({
            email: email,
            password: password
        });

        // save user in the database
        user.save(function (err) {
            if (err) {
                return next(err);
            }

            // Respond to request indicating the user was created
            // res.json(user);
            res.json({token: tokenForUser(user)})

        });
    });
};