import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import store from './config/vuex'

import Router  from 'vue-router'
import {routes} from './config/router'
Vue.config.productionTip = false
const router = new Router({
  routes // routes: routes 的简写
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
