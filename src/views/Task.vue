<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>{{task.title}}</h1>
        <v-spacer/>
        <v-btn icon @click="check(task)">
          <v-icon v-if="task.finished" color="accent">check_box</v-icon>
          <v-icon v-else color="accent">check_box_outline_blank</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="subheading">{{task.description}}</v-card-text>
      <v-card-actions class="mt-3">
        <v-icon>account_circle</v-icon>
        {{task.assignedTo}} |
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">event_note</v-icon>
            {{task.date | date}}
          </template>
          <span>Fecha de creación</span>
        </v-tooltip>&nbsp;-&nbsp;
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">insert_invitation</v-icon>
            {{task.dueDate | date}}
          </template>
          <span>Fecha de vencimiento</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      task: {}
    };
  },
  methods: {
    ...mapMutations(["setSnack"]),
    ...mapActions("Task", ["checkTask"]),

    async getTask() {
      try {
        const task = await axios.get(`obtenerTareaPorId?id=${this.id}`);
        this.task = task;
      } catch (error) {
        this.setSnack("Error al cargar tarea");
        this.$router.push("/");
      }
    },
    async check(task){
      this.task = await this.checkTask(task);
    }
  },
  mounted() {
    this.getTask();
  }
};
</script>

<style>
</style>
