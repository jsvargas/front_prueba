import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://thawing-island-34663.herokuapp.com/'

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
