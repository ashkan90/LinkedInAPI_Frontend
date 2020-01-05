import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
Vue.axios.defaults.baseURL = 'http://localhost:8000/exa_war_exploded/rest/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
