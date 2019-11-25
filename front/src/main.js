// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//状态管理
import store from './store'

//axios 请求
import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = 'http://localhost:8090/program'
Vue.prototype.$axios = axios

//导入UI框架
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.prototype.$axios = axios

Vue.use(BootstrapVue)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
