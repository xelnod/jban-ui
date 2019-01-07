/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/index';
import BuildDetail from '@/pages/build-detail';
import LoginRegister from '@/pages/login-register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/login/',
      name: 'LoginRegister',
      component: LoginRegister,
    },
    {
      path: '/build/:id',
      name: 'BuildDetail',
      component: BuildDetail,
    },
  ],
});
