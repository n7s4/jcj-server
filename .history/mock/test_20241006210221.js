const Mock = require('mockjs')
module.export = {
  {
    url: '/api/test',
    method: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          msg: 'success'
        }
      }
    }
  }
}
