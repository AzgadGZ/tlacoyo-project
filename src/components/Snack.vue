<template>
  <v-snackbar v-model="snackbar" multi-line>
    {{$store.state.Snack.text}}
    <v-btn color="primary" flat @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar: {
      get() {
        return this.$store.state.Snack.isActive;
      },
      set(value) {
        this.$store.commit("toggleSnack", value);
      }
    }
  }
};
</script>

<style>
</style>
