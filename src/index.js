import Vue from 'vue'

import App from '~/App'
import router from '~/routes'
import store from '~/stores'

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
/* eslint-enable */
