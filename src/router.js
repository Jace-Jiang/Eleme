import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页' },
      component: Home
    },
    {
      path: '/goods',
      name: 'goods',
      meta: { title: '商品' },
      component: () => import('@/components/goods')
    },
    {
      path: '/ratings',
      name: 'ratings',
      meta: { title: '评价' },
      component: () => import('@/components/ratings')
    },
    {
      path: '/seller',
      name: 'seller',
      meta: { title: '商家' },
      component: () => import('@/components/seller')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
router.afterEach((to, from) => {

})
export default router
