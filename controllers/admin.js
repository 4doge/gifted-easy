const passport = require('koa-passport');
const config = require('config');

const User = require('../models/user');
const Category = require('../models/category');
const errorHandler = require('../utils/errorHandler');


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
    try {
        let user = new User ({
            fullName: ctx.request.body.fullName,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
            isAdmin: true
        });
        await user.save();
        ctx.body = user.getAuthData();
    } catch(e) {
        ctx.status = 400;
        ctx.body = errorHandler(e);
    }
};

exports.categories = async function(ctx) {
    const perPage = config.categoriesPerPage;
    const page = ctx.params.page;
    let categories = await Category.find().skip(page * perPage).limit(perPage);
    ctx.body = {categories: categories};
};
