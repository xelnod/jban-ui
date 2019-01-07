import * as Api from '@/api';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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

export const refreshState = ({ dispatch }) => {
  dispatch('getCurrentUser');
};

export const getCurrentUser = ({ commit }) => {
  Api.getCurrentUser()
    .then((data) => {
      commit(SET_CURRENT_USER, data);
    })
    .catch(error => error);
};
