import Vue from 'vue'
import App from './App.vue'
import Icon from '@/components/Icon.vue'

Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
