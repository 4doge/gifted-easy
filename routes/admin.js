const Router = require('koa-router');
const passport = require('koa-passport');

const adminCtrl = require('../controllers/admin');


const router = new Router();

router.post('/auth', adminCtrl.auth);
router.post('/sign-up', adminCtrl.signUp);
router.get('/categories/:page', passport.authenticate('jwt', { session: false }), adminCtrl.categories);

module.exports = router;
