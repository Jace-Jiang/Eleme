export default {
  /**
     * @description token在Cookie中存储的天数，默认1天 (测试时设置为4分钟)
     */
  cookieExpires: 1,

  /**
     * @description api请求基础路径
     */
  baseUrl: {
    dev: 'http://127.0.0.1:3000',
    pro: 'http://127.0.0.1:3000'
  },
  /**
     * @description 默认打开的首页的路由name值，默认为home
     */
  homeName: 'home'
}

