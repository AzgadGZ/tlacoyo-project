import Vue from 'vue';
import './plugins/vuetify';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './axiosConfig';
import initDB from './indexedDB/IndexedDB';


Vue.config.productionTip = false;

// Configuración inicial de IndexedDB
initDB.sync();

Vue.filter('date', function (value) {
  return new Date(value).toLocaleDateString();
})

Vue.use(require('vue-moment'));

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'https://talentland-restful-api.azurewebsites.net',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
  }),
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
