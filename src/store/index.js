import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  currentUser: {
    username: 'traveller',
  },
  isLoggedIn: false,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;

