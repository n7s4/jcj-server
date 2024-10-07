const Mock = require('mockjs')
module.export = [
  {
    url: '/api/test',
    method: 'get',
    response() {
      return {
        code: 20000,
        data: Mock.mock({
          'list|20': [{ name: '@name' }]
        })
      }
    }
  }
]
