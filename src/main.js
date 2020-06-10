/* eslint-disable */
import Vue from 'vue'
import BoostrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router' 
import store from './store' 

import './assets/sass/index.sass'

Vue.use(BoostrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BoostrapVue,
  render: h => h(App)
}).$mount('#app')     






