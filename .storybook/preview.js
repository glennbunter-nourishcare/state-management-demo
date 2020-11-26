import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.min.css'
Vue.use(Buefy)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
