const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./data/getQuestionList')
module.exports = [
  // 获取单个问卷信息
  {
    url: '/api/question/:id',
    method: 'get',
    response(){
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          // 组件列表
          componentList: [
            // title
            {
              fe_id: Random.id(),
              type: 'questionTitle',
              title: '标题',
              isHidden: false,
              isLocked: false,
              props: {
                text: '个人信息调研',
                level: 1,
                isCenter: false
              }
            },
            // input
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '你的姓名',
              isHidden: false,
              isLocked: false,
              props: {
                title: '输入框1',
                placeholder: '请输入姓名'
              }
            },
            // textarea
            {
              fe_id: Random.id(),
              type: 'questionTextarea',
              title: '多行输入',
              isHidden: false,
              isLocked: false,
              props: {
                title: '你的爱好',
                placeholder: '比如听歌...'
              }
            },
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '你的电话',
              isHidden: false,
              isLocked: false,
              props: {
                title: '输入框2',
                placeholder: '请输入电话'
              }
            },
            // 段落
            {
              fe_id: Random.id(),
              type: 'questionParagraph',
              title: '段落',
              isHidden: false,
              isLocked: false,
              props: {
                text: '一行段落',
                isCenter: false
              }
            },
            // 用户信息
            {
              fe_id: Random.id(),
              type: 'questionInfo',
              title: '用户信息',
              isHidden: false,
              isLocked: false,
              props: {
                desc: '一个相信用代码可以改变世界的人',
                title: '问卷标题'
              }
            }
          ]
        }
      }
    }
  },
  // 创建问卷
  {
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  // 获取问卷列表
  {
    url: '/api/question',
    method: 'get',
    response(ctx) {
       const {url= '', query = {}} = ctx
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const isStar = url.indexOf('isStar=true') >= 0
      const pageSize = parseInt(query.pageSize)
      return {
        errno: 0,
        data: {
          list: getQuestionList({len: pageSize, isDeleted, isStar}),
          total: 100
        }
      }
    }
  },
  // 更新问卷 && 删除问卷
  {
    url: '/api/question/:id',
    method: 'patch',
    response(){
      return {
        errno: 0
      }
    }
  },
  // 复制问卷
  {
    url: '/api/question/duplicate/:id',
    method: 'post',
    response(){
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  // 批量彻底删除
  {
    url: '/api/question',
    method: 'delete',
    response(){
      return {
        errno: 0
      }
    }
  }
]