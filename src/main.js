import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import swInput from './components/sw-input.vue';

Vue.config.productionTip = false;
Vue.component('sw-input', swInput);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
