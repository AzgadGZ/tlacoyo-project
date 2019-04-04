import axios from "axios";
export default {
  namespaced: true,
  state: {
    tasks: [
      {
        _id: 1,
        title: "Titulo",
        description: "Description",
        initialDate: "22/07/2019",
        dueDate: "22/07/2019",
        status: true
      },
      {
        _id: 2,
        title: "Titulo2",
        description: "Description2",
        initialDate: "22/07/2019",
        dueDate: "22/07/2019",
        status: true
      },
      {
        _id: 3,
        title: "Titulo3",
        description: "Description 3",
        initialDate: "22/07/2019",
        dueDate: "22/07/2019",
        status: false
      }
    ]
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async getTasks({ commit }) {
      try {
        const tasks = await axios.get("obtenerTareas");
        commit("setTasks", tasks);
      } catch (error) {
        if (error.detail) commit("setSnack", error.detail, { root: true });
      }
    }
  }
};
