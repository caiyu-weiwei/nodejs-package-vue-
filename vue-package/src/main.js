import Vue from 'vue'
import App from './App.vue'
import cySwitch from './packages/switch/index'

Vue.use(cySwitch)
new Vue({
  el: '#app',
  render: h => h(App)
})
