import axios from "axios";
export default {
  namespaced: true,
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, tasks) {
      state.tasks.push(tasks);
    }
  },
  actions: {
    async getTasks({ commit }, id) {
      try {
        const tasks = await axios.get(`obtenerTareaPorId?id=${id}`);
        commit("setTasks", tasks);
      } catch (error) {
        commit("setSnack", "Error al obtener tareas", { root: true });
      }
    },
    async newTask({ commit }, task) {
      try {
        const newTask = await axios.post("agregarTarea", task);
        commit("addTask", newTask);
        return true;
      } catch (error) {
        commit("setSnack", "Error al crear tarea", { root: true });
      }
    }
  }
};
