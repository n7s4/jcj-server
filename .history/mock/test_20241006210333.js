const Mock = require('mockjs')
const Random
module.export = [
  {
    url: '/api/test',
    method: 'get',
    response() {
      return {
        code: 20000,
        data: {
          name: '文殊'
        }
      }
    }
  }
]
