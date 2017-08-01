const passport = require('koa-passport');

const User = require('./models/user');


exports.auth = async function (ctx, next) {
    await passport.authenticate('local', { session: false }, function(err, user, info) {
        if (user) {
            ctx.body = user.getAuthData();
        } else {
            ctx.status = 400;
            if (info && info.message) {
                ctx.body = {error: info.message};
            } else {
                ctx.body = {error: 'Invalid credentials'};
            }
        }
    })(ctx, next);
};

exports.signUp = async function (ctx) {
    let user = new User ({
        fullName: ctx.request.body.fields.fullName,
        email: ctx.request.body.fields.email,
        password: ctx.request.body.fields.password,
        isAdmin: true
    });
    await user.save();
    ctx.body = user.getAuthData();
};
