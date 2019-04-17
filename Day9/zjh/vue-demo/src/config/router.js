import Vue from 'vue'
import Router  from 'vue-router'
import HelloWorld from '../HelloWorld'
import last from '../last'
import page404 from '../page404'
Vue.use(Router)
export const routes = [
    {
        path:'/',
        name:'HelloWorld', //考试页
        component:HelloWorld
    },
    {
        path:'/HelloWorld',
        name:'HelloWorld', //考试页
        component:HelloWorld
    },
    {
        path:'/last',
        name:'last',
        component:last
    },
    {
        path:'*',
        name:"page404",
        component:page404
    }
]
