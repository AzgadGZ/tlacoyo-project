<template>
  <v-container grid-list-md fluid>
    <v-layout>
      <v-btn block color="primary" depressed class="mb-3">
        <v-icon left>delete</v-icon>Eliminar lista
      </v-btn>
    </v-layout>
    <list-tasks/>
    <add-task/>
  </v-container>
</template>

<script>
export default {
  components: {
    AddTask: () => import("@/components/AddTask.vue"),
    ListTasks: () => import("@/components/ListTasks.vue")
  }
};
</script>
