import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

import VueTippy, { TippyComponent } from 'vue-tippy'

Vue.component('tippy', TippyComponent)

Vue.use(VueTippy)

new Vue({
  render: h => h(App),
}).$mount('#app')