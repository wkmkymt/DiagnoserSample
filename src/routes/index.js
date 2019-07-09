import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '@/views/_View'
import HomeView from '@/views/Home'
import DiagnosisView from '@/views/Diagnosis'
import ResultView from '@/views/Result'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/diagnosis',
          name: 'diagnosis',
          component: DiagnosisView
        },
        {
          path: '/result',
          name: 'result',
          component: ResultView
        }
      ]
    }
  ]
})
