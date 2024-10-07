const Mock = require('mockjs')
const Random = Mock.Random
module.export = [
  {
    url: '/api/test',
    method: 'get',
    response() {
      return {
        code: 20000,
        data: {
          name: Random.cname
        }
      }
    }
  }
]
