let LocalStrategy = require('passport-local');

let User = require('../../models/user');


let opts = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
};

module.exports = new LocalStrategy(opts, function(req, email, password, done) {
    User.findOne({
        email: email
    }, function(err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false, {message: 'User doesn\'t exist!'});
        }

        if (!user.checkPassword(password)) {
            return done(null, false, {message: 'Incorrect password!'});
        }

        return done(null, user);
    });
});
