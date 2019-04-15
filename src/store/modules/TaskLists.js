import axios from 'axios';

export default {
  namespaced: true,
  state: {
    lists: [],
    selectedList: null,
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
    },
  },
  actions: {
    async getTaskLists({ dispatch, commit }) {
      try {
        // TODO: Analizar esta parte
        dispatch('IndexedDB/getData', {
          storeType: 'Listas',
        }, { root: true });

        // TODO
        console.log('Pase el dispatch');

        const lists = await axios.get('ObtenerListas');
        commit('setLists', lists);
        dispatch('IndexedDB/addData', {
          storeType: 'Listas',
          data: lists,
        }, { root: true });

        if (lists.length > 0) {
          commit('changeSelectedList', lists[0]._id);
        }
      } catch (error) {
        commit('setSnack', 'Error al cargar listas', { root: true });
      }
    },
    async newTaskLists({ dispatch, commit }, lista) {
      try {
        const list = await axios.post('agregarLista', lista);
        commit('addList', list);
        dispatch('IndexedDB/addData', {
          storeType: 'Listas',
          data: list,
        }, { root: true });
        return true;
      } catch (error) {
        commit('setSnack', 'Error al agregar nueva lista', { root: true });
        return false;
      }
    },
    async removeTaskList({ dispatch, commit, state }) {
      try {
        const response = await axios.delete('borrarLista/', {
          data: {
            id: state.selectedList,
          },
        });
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        commit('removeTaskList', response._id);
        dispatch('IndexedDB/deleteData', {
          storeType: 'Listas',
          data: response,
        }, { root: true });
        return true;
      } catch (error) {
        commit('setSnack', 'Error al eliminar lista', { root: true });
        return false;
      }
    },
  },
};
