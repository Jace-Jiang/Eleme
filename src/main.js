import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import VueResource from 'vue-resource'
import mockjs from 'mockjs'
Vue.use(iview)
Vue.use(VueResource)
Vue.use(mockjs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
