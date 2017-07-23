const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix: '/api'
});

router.get('/hello', async function(ctx, next) {
    ctx.body = 'Hello world!';
});

app.use(router.routes());

app.listen(process.env.PORT || 3000);
