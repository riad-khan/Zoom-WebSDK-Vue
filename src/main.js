import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.ZoomMtg = window.ZoomMtg;

new Vue({
  render: h => h(App),
}).$mount('#app')
