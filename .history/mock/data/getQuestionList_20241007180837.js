const Mock = require('mockjs')
const Random = Mock.Random
function getQuestionList(len=10,isDelete=false) {
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublish: Random.boolean(),
      answerCount: Random.integer(0, 100),
      createAt: Random.datetime(),
      isStar: Random.boolean(),
      isDelete, //假删除

    })
  }
  return list
}