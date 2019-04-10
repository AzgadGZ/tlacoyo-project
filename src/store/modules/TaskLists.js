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
    },
    removeTaskList(state, listID) {
      state.lists = state.lists.filter(list => list._id !== listID);
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
    },
    async removeTaskList({ commit, state }) {
      try {
        const response = await axios.delete("borrarLista/", {
          data: {
            id: state.selectedList
          }
        });
        commit("removeTaskList", response._id);
        return true;
      } catch (error) {
        commit("setSnack", "Error al eliminar lista", { root: true });
      }
    }
  }
};
