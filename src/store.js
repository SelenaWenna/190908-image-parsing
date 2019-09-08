import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    saveImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    async parseImages({ commit }) {
      const resp = await axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDnzmtj12p6roMg_sQJrgL4iTRrrlm3CnQ&cx=017576662512468239146:omuauf_lfve&q=cars');
      commit('saveImages', resp.data.items);
    },
  },
});
