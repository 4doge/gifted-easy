const Koa = require('koa');
const Router = require('koa-router');
const cors = require('kcors');
const fs = require('fs');
const path = require('path');
const passport = require('./app/libs/passport');
const serve = require('koa-static');

require('./app/libs/mongoose');

const app = new Koa();
const router = new Router({
    prefix: '/api'
});


const middlewares = fs.readdirSync(path.join(__dirname, 'app/middlewares')).sort();

app.use(serve('docs'));
app.use(cors());
app.use(passport.initialize());

middlewares.forEach(function(middleware) {
    app.use(require('./app/middlewares/' + middleware));
});


router.use('/accounts', require('./app/accounts/routes').routes());
router.use('/categories', require('./app/categories/routes').routes());
router.use('/products', require('./app/products/routes').routes());

app.use(router.routes());

app.listen(process.env.PORT || 3000);
