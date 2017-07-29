const Router = require('koa-router');
const passport = require('koa-passport');
const {
    default: validator,
    object,
    string
} = require('koa-context-validator');

const adminCtrl = require('../controllers/admin');


const router = new Router();

router.post('/auth', adminCtrl.auth);
router.post('/sign-up', adminCtrl.signUp);
router.get('/categories/:page',
    passport.authenticate('jwt', { session: false }),
    adminCtrl.categories);
router.post('/categories/new',
    passport.authenticate('jwt', { session: false }),
    validator({
        body: object().keys({
            title: string().required()
        })
    }),
    adminCtrl.newCategory);


module.exports = router;
