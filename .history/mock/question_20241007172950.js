const Mock = require('mockjs')
const Random = Mock.Random
module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response(){
      return {
        errno: 0,
        msg: '测试错误',
        data: {
          id: Random.id(),
          title: Random.ctitle()
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 200,
        data: {
          id: Random.id()
        }
      }
    }
  }
]