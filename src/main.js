import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueClipboard from 'vue-clipboard2';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueClipboard);

const files = require.context('./components', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

new Vue({
  render: h => h(App),
}).$mount('#app')

import "./scss/style.scss";
