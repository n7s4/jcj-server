const Mock = require('mockjs')
const Random = Mock.Random()
module.export = [
  {
    code: 200,
    method: 'get',
    response(){
      return {
        code: 200,
        data: {
          id: Random.
        }
      }
    }
  }
]