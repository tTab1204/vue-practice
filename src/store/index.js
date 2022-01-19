import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '@/apis';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: [],
    token: null,
  },

  // getters: 상태 캐싱
  getters: {
    isAuth(state) {
      return !!state.token;
    },
  },

  // mutations: 단순 상태 변경
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle;
    },
    SET_BOARDS(state, boards) {
      state.boards = boards;
    },
    LOGIN(state, token) {
      if (!token) return;
      state.token = token;
      localStorage.setItem('token', token);
      api.setAuthInHeader(token);
    },
    LOGOUT(state) {
      state.token = null;
      delete localStorage.token;
      api.setAuthInHeader = null;
    },
  },

  // actions: 비동기 처리 관련
  actions: {
    ADD_BOARD(_, { title }) {
      return api.board.create(title);
    },
    FETCH_BOARDS({ commit }) {
      return api.board.fetch().then((data) => {
        commit('SET_BOARDS', data.list);
      });
    },
    LOGIN({ commit }, { email, password }) {
      return api.auth
        .login(email, password)
        .then(({ accessToken }) => commit('LOGIN', accessToken));
    },
  },
});

// 최초에 접속했을 때 토큰 유무를 확인하기 위함.
const { token } = localStorage;
store.commit('LOGIN', token);

export default store;
