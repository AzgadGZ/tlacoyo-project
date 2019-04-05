<template>
  <div>
    <v-btn block flat color="secondary" @click="addingList = true">
      <v-icon class="mr-1">control_point</v-icon>nueva lista
    </v-btn>

    <v-dialog v-model="addingList" persistent width="500">
      <v-card>
        <v-card>
          <v-card-title>
            <h3 class="headline">Nueva lista</h3>
          </v-card-title>
          <v-form @submit.prevent="addNewList">
            <v-card-text>
              <v-layout>
                <v-flex>
                  <v-text-field v-model="newList.name" color="secondary" label="Titulo"/>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <v-text-field v-model="newList.iconName" color="secondary" label="Icono"/>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="secondary" @click="addingList = false">Cancelar</v-btn>
              <v-btn color="secondary" type="submit">Aceptar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      addingList: false,
      newList: {
        name: "",
        iconName: ""
      }
    };
  },
  watch: {
    addingList(newValue) {
      if (newValue)
        this.newList = {
          name: "",
          iconName: ""
        };
    }
  },
  methods: {
    ...mapActions("TaskLists", ["newTaskLists"]),
    async addNewList() {
      const res = await this.newTaskLists(this.newList);
      if (res) this.addingList = false;
    }
  }
};
</script>

<style>
</style>
