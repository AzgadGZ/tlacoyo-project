import Vue from 'vue';
import Vuex from 'vuex';
import Task from './modules/Task';
import TaskLists from './modules/TaskLists';
import Snack from './modules/Snack';
import IndexedDB from './modules/IndexedDB';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Task,
    Snack,
    TaskLists,
    IndexedDB,
  },
});
