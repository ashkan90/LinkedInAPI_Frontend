import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window: true,
    status: '',
  },
  getters: {
    status: state => state.status === 'ok',
  },
  mutations: {
    setWindowState: (state) => {
      state.window = false;
    },
  },
  actions: {
    async callbackStatus({ state }, status) {
      state.status = status;
    },
  },
  modules: {
  },
  plugins: [
    (store) => {
      store.subscribe(((mutation, state) => {
        console.log(mutation, state);
      }));
    },
    createPersistedState(),
  ],
});
