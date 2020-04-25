import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./vuex/store";
import '../node_modules/layui-src/dist/css/layui.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
