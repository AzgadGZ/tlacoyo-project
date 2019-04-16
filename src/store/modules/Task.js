import axios from 'axios';

export default {
  namespaced: true,
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      if (tasks == null) state.tasks = [];
      else state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, task){
      const index = state.tasks.find(t => t._id === task._id);
      if(index == -1) return
      state.tasks.splice(index, 1, task);
    },
    delTask(state, id){
      const index = state.tasks.findIndex( task => task._id === id );
      state.tasks.splice(index, 1);
    }
  },
  actions: {
    async getTasks({ commit }, id) {
      try {
        const tasks = await axios.get(`obtenerTareas?id=${id}`);
        commit('setTasks', tasks);
      } catch (error) {
        commit('setSnack', 'Error al obtener tareas', { root: true });
      }
    },
    async newTask({ commit }, task) {
      try {
        const newTask = await axios.post('agregarTarea', task);
        commit('Task/addTask', newTask, { root: true });
        return true;
      } catch (error) {
        commit('setSnack', 'Error al crear tarea', { root: true });
        return false;
      }
    },
    async checkTask({commit}, task){
      try {
        const tempTask = Object.assign({}, task);
        tempTask.finished = !tempTask.finished;
        const res = await axios.put(`actualizarTarea?id=${tempTask._id}`, tempTask);
        commit('updateTask', res);
        return res;
      } catch (error) {
        commit('setSnack', 'Error al actualizar tarea', { root: true });
        return false;
      }
    }
  },
};
