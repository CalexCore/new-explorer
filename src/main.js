import '@fortawesome/fontawesome-free/css/all.min.css';
import 'typeface-source-sans-pro';
import 'typeface-roboto-mono';
import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import '@/components';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
