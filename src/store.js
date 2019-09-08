import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const baseUrl = 'https://www.googleapis.com/customsearch/v1';
const key = 'AIzaSyDnzmtj12p6roMg_sQJrgL4iTRrrlm3CnQ';
const cx = '015079701613406697772:oh4spijl5hq';

export default new Vuex.Store({
  state: {
    images: [],
    searchTerms: '',
  },
  getters: {
    images: state => state.images,
  },
  mutations: {
    clearImages(state) {
      state.images = [];
    },
    saveImages(state, images) {
      state.images.splice(state.images.length, 0, ...images);
    },
    saveSearchTerms(state, q) {
      state.searchTerms = q;
    },
  },
  actions: {
    clearImages: ({ commit }) => {
      commit('clearImages');
    },
    parseImages: async ({ commit, state }, payload) => {
      if (!payload && !state.searchTerms) return;

      if (payload) {
        commit('saveSearchTerms', payload.q);
      }

      const resp = await axios.get(baseUrl, {
        params: {
          key,
          cx,
          q: state.searchTerms,
          searchType: 'image',
          start: state.images.length + 1,
        },
      });
      commit('saveImages', resp.data.items);
    },
  },
});
