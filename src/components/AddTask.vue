<template>
  <div>
    <v-btn fixed dark fab bottom right color="accent" @click="dialog = true">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title>
          <h3 class="headline">Nueva tarea</h3>
        </v-card-title>
        <v-form @submit.prevent="addTask">
          <v-container>
            <v-layout>
              <v-flex>
                <v-text-field v-model="task.title" color="secondary" label="Titulo"/>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex>
                <v-text-field v-model="task.assignedTo" color="secondary" label="Responsable"/>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex>
                <v-textarea
                  v-model="task.description"
                  color="secondary"
                  label="Contenido"
                  no-resize
                />
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="task.dueDate"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      color="secondary"
                      v-model="task.dueDate"
                      label="Fecha de vencimiento"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="task.dueDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="secondary" @click="menu = false">Cancelar</v-btn>
                    <v-btn color="secondary" @click="$refs.menu.save(task.dueDate)">Aceptar</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="secondary" @click="dialog = false">Cancelar</v-btn>
            <v-btn type="submit" color="secondary">Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      menu: false,
      task: {
        dueDate: new Date().toISOString().substr(0, 10),
        title: "",
        description: "",
        assignedTo: ""
      }
    };
  },
  methods: {
    ...mapActions("Task", ["newTask"]),
    async addTask() {
      const newTask = {
        ...this.task,
        listId: this.selectedList
      };
      try {
        const res = await this.newTask(newTask);
        if (res) this.dialog = false;
      } catch (error) {}
    }
  },
  computed: {
    ...mapState({
      selectedList: state => state.TaskLists.selectedList
    })
  },
  watch: {
    dialog: function(newValue) {
      if (newValue) {
        this.task = {
          dueDate: new Date().toISOString().substr(0, 10),
          title: "",
          description: "",
          assignedTo: ""
        };
      }
    }
  }
};
</script>

<style>
</style>
