const Mock = require('mockjs')
const Random = Mock.Random
function getQuestionList(opt) {
  const { len = 10, isDeleted = false, isStar = false } = opt
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublish: Random.boolean(),
      answerCount: Random.integer(0, 100),
      createAt: Random.datetime(),
      isStar,
      isDeleted, //假删除

    })
  }
  return list
}
module.exports = getQuestionList