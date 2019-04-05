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
    },
    addList(state, list) {
      state.lists.push(list);
    }
  },
  actions: {
    async getTaskLists({ commit }) {
      try {
        const lists = await axios.get("ObtenerListas");
        commit("setLists", lists);
        if (lists.length > 0) {
          commit("changeSelectedList", lists[0]._id);
        }
      } catch (error) {
        commit("setSnack", "Error al cargar listas", { root: true });
      }
    },
    async newTaskLists({ commit }, lista) {
      try {
        const list = await axios.post("agregarLista", lista);
        commit("addList", list);
        return true;
      } catch (error) {
        commit("setSnack", "Error al agregar nueva lista", { root: true });
      }
    }
  }
};
