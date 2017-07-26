const Koa = require('koa');
const Router = require('koa-router');
const cors = require('kcors');
const fs = require('fs');
const path = require('path');
const passport = require('./libs/passport');

require('./libs/mongoose');

const app = new Koa();
const router = new Router({
    prefix: '/api'
});


const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

app.use(cors());
app.use(passport.initialize());

middlewares.forEach(function(middleware) {
    app.use(require('./middlewares/' + middleware));
});

router.use('/admin', require('./routes/admin').routes());

app.use(router.routes());

app.listen(process.env.PORT || 3000);
