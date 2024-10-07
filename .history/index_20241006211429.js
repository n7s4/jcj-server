const koa = require('koa');
const koaRouter = require('koa-router');
const mockList = require('./mock/index')
const app = new koa()
const router = new koaRouter()
// 注册mock路由
mockList.forEach(item => {
  const {url, method, response} = item
  router[method](url, async ctx => {
    const res = response()
    ctx.body = res
  })
})