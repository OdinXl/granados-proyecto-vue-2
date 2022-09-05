import Vue from 'vue'
import App from './App.vue'

//agregamos axios y las configuraciones de default
require("./logic/http-common.js");
//notificaciones
require("./logic/notify.js");

//agregamos las rutas de la app
import router from './logic/router'

Vue.config.productionTip = false

//filtros
require("./logic/filters");

//vuex
import store from './store'

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
