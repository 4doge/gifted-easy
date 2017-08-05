const Router = require('koa-router');
const passport = require('koa-passport');
const {
    default: validator,
    object,
    string
} = require('koa-context-validator');

const categoryCtrl = require('./controllers');


const router = new Router();

router.get('/',
    passport.authenticate('jwt', { session: false }),
    categoryCtrl.categories);
router.post('/',
    passport.authenticate('jwt', { session: false }),
    validator({
        body: object().keys({
            title: string().required()
        })
    }),
    categoryCtrl.newCategory);
router.delete('/',
    passport.authenticate('jwt', { session: false }),
    validator({
        body: object().keys({
            id: string().required()
        })
    }),
    categoryCtrl.deleteCategory);
router.put('/',
    passport.authenticate('jwt', { session: false }),
    validator({
        body: object().keys({
            id: string().required(),
            title: string().required()
        })
    }),
    categoryCtrl.putCategory);


module.exports = router;
