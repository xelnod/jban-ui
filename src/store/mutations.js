export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export default {
  [LOGIN](state) {
    state.pending = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isLoggedIn = true;
    state.pending = false;
  },
  [LOGIN_FAILED](state) {
    state.isLoggedIn = false;
    state.pending = false;
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
    state.currentUser = {
      username: 'traveller',
    };
  },
  [SET_CURRENT_USER](state, payload) {
    state.currentUser = payload;
    state.isLoggedIn = !payload.anonymous;
  },
};
