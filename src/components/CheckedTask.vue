<template>
  <v-btn icon @click="checkTask(task)">
    <v-icon v-if="task.finished" color="accent">check_box</v-icon>
    <v-icon v-else color="accent">check_box_outline_blank</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task"],
  methods: {
    ...mapActions("Task", ["checkTask"])
  }
};
</script>

<style>
</style>
