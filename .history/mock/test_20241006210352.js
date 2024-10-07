const Mock = require('mockjs')
const Random = Mock.Random
module.export = [
  {
    url: '/api/test',
    method: 'get',
    response() {
      return {
        code: 200,
        data: {
          name: Random.cname()
        }
      }
    }
  }
]
