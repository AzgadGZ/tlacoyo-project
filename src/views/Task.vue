<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>Titulo</h1>
      </v-card-title>
      <v-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, minima? Distinctio blanditiis optio quaerat a dicta. Soluta, ducimus expedita fugit, assumenda necessitatibus rem ut, distinctio laboriosam aliquid maiores et suscipit!</v-card-text>
      <v-card-actions class="mt-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">event_note</v-icon>22/07/2019
          </template>
          <span>Fecha de creación</span>
        </v-tooltip>&nbsp;-&nbsp;
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">insert_invitation</v-icon>25/07/2019
          </template>
          <span>Fecha de vencimiento</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      task: null
    };
  },
  methods: {
    ...mapMutations(["setSnack"]),

    async getTask() {
      try {
        const task = await axios.get(`obtenerTareaPorId?id=${this.id}`);
        this.task = task;
      } catch (error) {
        this.setSnack("Error al cargar tarea");
        this.$router.push('/');
      }
    }
  },
  mounted() {
    console.log(this.$route);
    this.getTask();
  }
};
</script>

<style>
</style>
