import Vue from 'vue'
import ChangeMoney from './ChangeMoney.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ChangeMoney),
}).$mount('#app')
