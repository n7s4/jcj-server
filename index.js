const koa = require('koa');
const koaRouter = require('koa-router');
const mockList = require('./mock/index')
const app = new koa()
const router = new koaRouter()
// 注册mock路由
mockList.forEach(item => {
  const {url, method, response} = item
  router[method](url, async ctx => {
    const res = response(ctx)
    ctx.body = res
  })
})
app.use(router.routes())
app.listen(3001, () => {
  console.log('后台服务已启动，17.0.0.1:3001')
})