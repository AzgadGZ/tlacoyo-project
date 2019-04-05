import axios from "axios";
export default {
  namespaced: true,
  state: {
    lists: [],
    selectedList: null
  },
  mutations: {
    setLists(state, lists) {
      state.lists = lists;
    },
    changeSelectedList(state, selectedList) {
      state.selectedList = selectedList;
    }
  },
  actions: {
    async getTaskLists({ commit, dispatch }) {
      try {
        const lists = await axios.get("ObtenerListas");
        commit("setLists", lists);
        if (lists.length > 0) {
          commit("changeSelectedList", lists[0]._id);
        }
      } catch (error) {
        if (error.detail) commit("setSnack", error.detail, { root: true });
      }
    }
  }
};
