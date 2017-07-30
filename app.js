const Koa = require('koa');
const Router = require('koa-router');
const cors = require('kcors');
const fs = require('fs');
const path = require('path');
const passport = require('./app/libs/passport');

require('./app/libs/mongoose');

const app = new Koa();
const router = new Router({
    prefix: '/api'
});


const middlewares = fs.readdirSync(path.join(__dirname, 'app/middlewares')).sort();

app.use(cors());
app.use(passport.initialize());

middlewares.forEach(function(middleware) {
    app.use(require('./app/middlewares/' + middleware));
});


router.use('/accounts', require('./app/accounts/routes').routes());
router.use('/categories', require('./app/categories/routes').routes());

app.use(router.routes());

app.listen(process.env.PORT || 3000);
