import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewPage from '~/pages/_view'
import IndexPage from '~/pages/index'
import DiagnosisPage from '~/pages/diagnosis'
import ResultPage from '~/pages/result'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ViewPage,
      children: [
        {
          path: '',
          name: 'top',
          component: IndexPage
        },
        {
          path: 'diagnosis',
          name: 'diagnosis',
          component: DiagnosisPage
        },
        {
          path: 'result',
          name: 'result',
          component: ResultPage
        }
      ]
    }
  ]
})
