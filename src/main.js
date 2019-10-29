import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import Notify from 'mdbvue/lib/components/Notify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { apolloProvider } from './graphql/apollo';


Vue.config.productionTip = false;
Vue.use(firestorePlugin);


Vue.use(Notify);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
