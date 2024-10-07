const koa = require('koa');
const koaRouter = require('koa-router');
const mockList = require('./mock/index')
mockList.forEach(item => {
  const {url, method, response} = item
})