const Router = require('koa-router');

const adminCtrl = require('./controller');


const router = new Router();

router.post('/auth', adminCtrl.auth);
router.post('/sign-up', adminCtrl.signUp);


module.exports = router;
