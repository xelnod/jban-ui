export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const AnonymousStub = {
  username: 'stranger',
  preferred_class: 'swordman',
};

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
    state.currentUser = AnonymousStub;
  },
  [SET_CURRENT_USER](state, payload) {
    state.currentUser = payload.anonymous ? AnonymousStub : payload;
    state.isLoggedIn = !payload.anonymous;
  },
  [REGISTER](state) {
    state.pending = true;
  },
  [REGISTER_SUCCESS](state, payload) {
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  [REGISTER_FAILED](state) {
    state.currentUser = AnonymousStub;
    state.isLoggedIn = false;
  },

};
