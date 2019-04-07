import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {text: 'Item 1'},
      {text: 'Item 2'},
      {text: 'Item 3'},
    ]
  },
  mutations: {
    CHANGE_TEXT (state, payload) {
      const { item, text } = payload;
      state.items = state.items.map(i => {
        if (i.text === item.text) {
          i.text = text
        }
        return i
      })
    },
  },
  actions: {
    changeText ({ commit }, payload) {
      commit('CHANGE_TEXT', payload)
    }
  }
});
