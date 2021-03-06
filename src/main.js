import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import animated from 'animate.css'
import '@/style/index.scss' //gobal scss
import '@/assets/iconfont/iconfont.css'
import './plugins/element.js'

Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
