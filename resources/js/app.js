import 'vuetify/dist/vuetify.min.css';
import './index.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import DashboardPlugin from './plugins/dashboard-plugin';
import VueMask from 'v-mask'
import App from './App.vue';
import store from './store';


// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueMask);
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
