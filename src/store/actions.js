import * as Api from '@/api';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SET_CURRENT_USER,
} from './mutations';


export const login = ({ dispatch, commit }, data) => new Promise((resolve, reject) => {
  commit(LOGIN);
  Api.login(data)
    .then((response) => {
      commit(LOGIN_SUCCESS);
      dispatch('refreshState');
      resolve(response);
    })
    .catch((error) => {
      commit(LOGIN_FAILED);
      reject(error);
    });
});

export const logout = ({ dispatch, commit }) => new Promise((resolve, reject) => {
  Api.logout()
    .then((response) => {
      commit(LOGOUT);
      dispatch('refreshState');
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});


export const refreshState = ({ dispatch }) => {
  dispatch('getCurrentUser');
};

export const getCurrentUser = ({ commit }) => {
  Api.getCurrentUser()
    .then((data) => {
      commit(SET_CURRENT_USER, data);
    })
    .catch((error) => {console.log('uinfo err', error)});
};
