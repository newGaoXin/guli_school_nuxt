import request from '@/utils/request'

export default {
  // 分页
  getPageList(current, limit) {
    return request({
      url: `/eduservice/teacherFont/pageList/${current}/${limit}`,
      method: 'post'
    })
  },
  getById(teacherId) {
    return request({
      url: `/eduservice/teacherFont/${teacherId}`,
      method: 'get'
    })
  }
}
