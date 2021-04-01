import request from '@/utils/request'
export default {
  getHotCourseAndTeacher() {
    return request({
      url: '/eduservice/index/getHotCourseAndTeacher',
      method: 'get'
    })
  }
}
