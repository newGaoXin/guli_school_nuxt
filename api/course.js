import request from '@/utils/request'
export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/eduservice/courseFont/pageList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

  // getNestedTreeList2() {
  //     return request({
  //         url: `/eduservice/edu/course/list2`,
  //         method: 'get'
  //     })
  // },
  // 获取课程二级分类
  getNestedTreeList2() {
    return request({
      url: `/eduservice/subject/getSubjectList`,
      method: 'get'
    })
  }
}
