import axios from '@/libs/api.request'

// 获取项目列表数据带统计数�
export const getProjects = () => {
  return axios.request({
    url: 'sellers',
    method: 'get'
  })
}
