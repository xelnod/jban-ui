/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import store from '@/store/index';


Vue.config.productionTip = false;

import router from './router';

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
