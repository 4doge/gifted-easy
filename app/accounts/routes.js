const Router = require('koa-router');

const adminCtrl = require('./controllers');


const router = new Router();

router.post('/auth', adminCtrl.auth);
router.post('/sign-up', adminCtrl.signUp);


module.exports = router;
