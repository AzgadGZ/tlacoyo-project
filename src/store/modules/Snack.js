export default {
  state: {
    isActive: false,
    text: '',
  },
  mutations: {
    toggleSnack(state, isActive) {
      state.isActive = isActive;
    },
    setSnack(state, message) {
      state.text = message;
      state.isActive = true;
    },
  },
};
