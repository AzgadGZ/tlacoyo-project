<template>
  <v-card :color=" task.status ? '#F5F5F5' : 'white' " :flat="task.status">
    <v-toolbar flat :color=" task.status ? '#F5F5F5' : 'white' ">
      <v-toolbar-title>
        <span v-if="task.status">
          <s>{{task.title}}</s>
        </span>
        <span v-else>{{task.title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon v-if="task.status" color="secondary">check_box</v-icon>
        <v-icon v-else color="accent">check_box_outline_blank</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text class="text-truncate">{{task.description}}</v-card-text>
    <v-card-actions>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">event_note</v-icon>
          {{task.initialDate}}
        </template>
        <span>Fecha de creación</span>
      </v-tooltip>&nbsp;-&nbsp;
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">insert_invitation</v-icon>
          {{task.dueDate}}
        </template>
        <span>Fecha de vencimiento</span>
      </v-tooltip>
      <v-spacer/>
      <v-btn flat color="accent" :to="`task/${task._id}`">Ver</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["task"]
};
</script>

<style>
</style>
