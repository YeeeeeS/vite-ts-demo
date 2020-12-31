import { state } from './state';
import { createStore } from 'vuex';

export default createStore({
  state,
  getters: {
    title   : state => state.title,
    userInfo: state => state.userInfo
  },
  mutations: {
    setUserInfo(state, info) {
      console.log('mutations info', info)
      state.userInfo = info;
    }
  },
  actions: {
    userAction({ commit }, msg) {
      console.log('actions msg', msg)
      commit('setUserInfo', msg)
    }
  },
  modules: {}
});