export default {
  state: {
    isOpen: null
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.isOpen = payload;
    }
  }
};
