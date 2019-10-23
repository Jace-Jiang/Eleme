import axios from '@/libs/api.request'

// 获取项目列表数据带统计数�
export const getSellers = () => {
  return axios.request({
    url: 'seller',
    method: 'get'
  })
}
