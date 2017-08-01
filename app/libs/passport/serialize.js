const passport = require('koa-passport');

const User = require('../../accounts/models/user');


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, done);
});
