import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Storage from 'vue-ls'

import '@/style/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import settings from "@/settings";

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Storage, settings.storageOptions)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
