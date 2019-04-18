
import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import FirstIndex from '../components/FirstIndex'
import EndAnswer from '../components/EndAnswer'

 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'FirstIndex', component: FirstIndex },
    { path: '/FirstIndex', name: 'FirstIndex', component: FirstIndex },
    { path: '/EndAnswer',  name: 'EndAnswer', component: EndAnswer},
  ]

})