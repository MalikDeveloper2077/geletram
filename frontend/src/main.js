import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import App from './App.vue';
import 'vue-toast-notification/dist/theme-default.css';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueToast);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
