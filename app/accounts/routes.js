const Router = require('koa-router');
const {
    default: validator,
    object,
    string
} = require('koa-context-validator');

const adminCtrl = require('./controllers');


const router = new Router();

router.post('/auth',
    validator({
        body: object().keys({
            email: string().required(),
            password: string().required()
        })
    }),
    adminCtrl.auth);
router.post('/sign-up',
    validator({
        body: object().keys({
            fullName: string().required(),
            email: string().required(),
            password: string().required()
        })
    }),
    adminCtrl.signUp);


module.exports = router;
