<template>
  <v-card :color=" task.status ? '#F5F5F5' : 'white' " :flat="task.status">
    <v-toolbar flat :color=" task.status ? '#F5F5F5' : 'white' ">
      <v-toolbar-title>
        <span v-if="task.status">
          <s>{{task.title}}</s>
        </span>
        <span v-else>{{task.title}}</span>
      </v-toolbar-title>
      <v-spacer/>
      <checked-task :task="task"/>
    </v-toolbar>
    <v-card-text class="text-truncate">{{task.description}}</v-card-text>
    <v-card-actions>
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
          {{task.dueDate | moment("add", "6 hours","DD/MM/YYYY")}}
        </template>
        <span>Fecha de vencimiento</span>
      </v-tooltip>
      <v-spacer/>
      <v-btn flat color="accent" :to="`task/${task._id}`">Ver</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CheckedTask from '@/components/CheckedTask';
export default {
  props: ['task'],
  components:{
    CheckedTask
  }  
};
</script>

<style>
</style>
