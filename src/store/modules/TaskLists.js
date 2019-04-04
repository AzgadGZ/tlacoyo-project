import axios from "axios";
export default {
  namespaced: true,
  state: {
    lists: [
      {
        _id: 1,
        title: "Trabajo",
        icon: "work"
      },
      {
        _id: 2,
        title: "Escuela",
        icon: "school"
      },
      {
        _id: 3,
        title: "Personales",
        icon: "person"
      }
    ],
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
          commit("changeSelectedList", 0);
          dispatch("Task/getTasks", null, { root: true });
        }
      } catch (error) {
        if (error.detail) commit("setSnack", error.detail, { root: true });
      }
    }
  }
};
