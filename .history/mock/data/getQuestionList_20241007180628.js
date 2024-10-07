const Mock = require('mockjs')
const Random = Mock.Random
function getQuestionList(len=10) {
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle()
    })
  }
}