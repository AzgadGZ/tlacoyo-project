<template>
  <div>
    <v-btn fixed dark fab bottom right color="accent" @click="dialog = true">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>
          <h3 class="headline">Nueva tarea</h3>
        </v-card-title>
        <v-form @submit.prevent="addTask">
          <v-container>
            <v-layout>
              <v-flex>
                <v-text-field v-model="title" color="secondary" label="Titulo"/>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex>
                <v-textarea v-model="description" color="secondary" label="Contenido" no-resize/>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      color="secondary"
                      v-model="date"
                      label="Fecha de vencimiento"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="secondary" @click="menu = false">Cancelar</v-btn>
                    <v-btn color="secondary" @click="$refs.menu.save(date)">Aceptar</v-btn>
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
export default {
  data() {
    return {
      dialog: false,
      menu: false,
      date: new Date().toISOString().substr(0, 10),
      title: '',
      description: '',
    };
  },
  methods: {
    addTask() {
      alert("adding task");
    }
  },
  watch: {
    dialog: function(newValue) {
      if (newValue) {
        this.menu = false;
        this.title = '';
        this.description = '';
        this.date = new Date().toISOString().substr(0, 10);
      }
    }
  }
};
</script>

<style>
</style>
