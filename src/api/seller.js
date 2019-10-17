import axios from '@/lib/api.request'

export const getsSeller = (query) => {
  return axios.request({
    url: 'seller/sel',
    method: 'get',
    params: query
  })
}
