import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.min.css'
import VueCompositionApi from '@vue/composition-api'
import '@fortawesome/fontawesome-pro/css/fontawesome.min.css'
import '@fortawesome/fontawesome-pro/css/all.min.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
