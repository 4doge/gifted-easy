const Router = require('koa-router');

const productCtrl = require('./controllers');


const router = new Router();


router.post('/', productCtrl.newProduct);


module.exports = router;
