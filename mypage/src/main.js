import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import 'expose-loader?$!expose-loader?jQuery!jquery';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
