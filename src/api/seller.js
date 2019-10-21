import axios from '@/lib/api.request'

export const getSeller = (query) => {
  return axios.request({
    url: '/seller',
    method: 'get',
    params: query
  })
}
