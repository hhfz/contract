// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Mint);
Vue.use(VueAxios, Axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
