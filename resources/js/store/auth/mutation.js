import Vue from 'vue';
import type from './type'
import JwtService from '@/common/jwt.service'

const mutations = {
  [type.AUTH_CLEAR_ERRORS] (state) {
    state.errors = [];
  },
  [type.AUTH_SET_ERROR] (state, {target, errors}) {

    Vue.set(state.errors, target, []);

    for (let key in errors)
      state.errors[target].push(errors[key][0]);
  },
  [type.AUTH_SET_USER] (state, data) {
    state.isAuthenticated = true;
    state.userId = data.userId;
    state.userRole = data.userRole;
    state.token = data.token;
    state.errors = {
        login: [],
        register: []
    };
    JwtService.setToken(data.token);
    JwtService.setRole(data.userRole);
  },
  [type.AUTH_LOGOUT] (state, payload) {
    JwtService.unsetToken();
    JwtService.unsetRole();
  },
  [type.AUTH_RESET_STATE] (state, payload) {
    state.isAuthenticated = false;
    state.userId = null;
    state.userRole = null;
    state.token = null;
    state.errors = {
        login: [],
        register: []
    };
  },
  [type.AUTH_SET_PASSENGER] (state, data) {
    state.user = data.user;
    JwtService.setUser(JSON.stringify(data.user));
  },
};
export default mutations;