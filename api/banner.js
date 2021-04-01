import request from '@/utils/request'
export default {
  getBannerList() {
    return request({
      url: '/cmsservice/banner/getBannerAll',
      method: 'get'
    })
  }
}
