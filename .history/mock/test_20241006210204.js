const Mock = require('mockjs')
module.export = {
  {
    url: '/api/test',
    type: 'get',
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
