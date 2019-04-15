import initDB from '../../indexedDB/IndexedDB';

export default {
  namespaced: true,
  getters: {
    getDataFields: state => state.fields,
  },
  actions: {
    async addData(_, payload) {
      try {
        initDB.addToDB(payload.storeType, payload.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getData({ commit }, payload) {
      const data = initDB.getFromDB(payload.storeType);
      commit('TaskLists/setLists', data, { root: true });
    },
    async deleteData(_, payload) {
      initDB.deleteFromDB(payload.storeType, payload.data);
    },
  },
};
