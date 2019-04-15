export default {
  mutations: {
    SOCKET_CONECTADO(state, mensaje) {
      console.log(mensaje);
    },
  },
  actions: {
    SOCKET_CREAR_LISTA_NUEVA({ commit }, lista) {
      commit('TaskLists/addList', lista);
    },
  },
};
