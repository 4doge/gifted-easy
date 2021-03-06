const Router = require('koa-router');
const passport = require('koa-passport');

const productCtrl = require('./controllers');


const router = new Router();

// TODO: finish creating new product method
router.post('/',
    passport.authenticate('jwt', { session: false }),
    productCtrl.newProduct);
router.get('/attributes/:category',
    passport.authenticate('jwt', { session: false }),
    productCtrl.attributes);


module.exports = router;
