const Router = require('koa-router');
const passport = require('koa-passport');

const brandCtrl = require('./controllers');


const router = new Router();

router.get('/',
    passport.authenticate('jwt', { session: false }),
    brandCtrl.brands);


module.exports = router;
