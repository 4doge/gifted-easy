const Router = require('koa-router');
const passport = require('koa-passport');

const productCtrl = require('./controllers');


const router = new Router();

// TODO: finish creating new product method
router.post('/', productCtrl.newProduct);
router.get('/attributes/:category',
    passport.authenticate('jwt', { session: false }),
    productCtrl.attributes);
router.get('/attribute-values/:attribute',
    passport.authenticate('jwt', { session: false }),
    productCtrl.attributeValues);


module.exports = router;
