import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

// 최초에 접속했을 때 토큰 유무를 확인하기 위함.
const { token } = localStorage;
store.commit('LOGIN', token);

export default store;
