import Vue from 'vue'
import Router from 'vue-router'
import Exam from './components/Exam'
import Result from './components/Result'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Exam },
        { path: '/exam', name: 'exam', component: Exam },
        { path: '/result', name: 'result', component: Result },
    ]
})