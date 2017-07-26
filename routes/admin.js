const Router = require('koa-router');

const adminCtrl = require('../controllers/admin');


const router = new Router();

router.post('/auth', adminCtrl.auth);
router.post('/sign-up', adminCtrl.signUp);

module.exports = router;
