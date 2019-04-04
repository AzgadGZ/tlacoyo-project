import Vue from "vue";
import Vuex from "vuex";
import Sidebar from "./modules/Sidebar";
import Task from "./modules/Task";
import TaskLists from "./modules/TaskLists";
import Snack from "./modules/Snack";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Sidebar,
    Task,
    Snack,
    TaskLists
  }
});
