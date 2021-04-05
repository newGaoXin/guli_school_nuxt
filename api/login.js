import request from '@/utils/request'
import cookie from 'js-cookie'
export default {
  // 登录
  submitLogin(userInfo) {
    return request({
      url: `/ucenterservice/member/login`,
      method: 'post',
      data: userInfo
    })
  },
  // 根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/ucenterservice/member/getLoginInfo`,
      method: 'post',
      headers: { 'token': cookie.get('guli_token') }
    })
    // headers: {'token': cookie.get('guli_token')}
  }
}
