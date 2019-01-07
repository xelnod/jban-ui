/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/index';
import BuildDetail from '@/components/build_detail';
import LoginRegister from '@/components/login_register';

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
