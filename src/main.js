import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
