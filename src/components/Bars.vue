<template>
  <v-navigation-drawer app v-model="sidebar">
    <v-toolbar color="primary" dark>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            <router-link tag="span" to="/" style="cursor:pointer">
              <span>DXC</span>
              <span class="font-weight-light">- To do</span>
            </router-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list subheader class="pt-3">
      <category
        @clicked="changeCategory"
        v-for="category in taskLists"
        :key="category._id"
        :category="category"
        :isActive=" category._id == selectedList "
      />
    </v-list>
    <v-btn block flat color="secondary" @click="addingList = true">
      <v-icon class="mr-1">control_point</v-icon>nueva lista
    </v-btn>

    <v-dialog v-model="addingList" width="500">
      <v-card>
        <v-card>
          <v-card-title>
            <h3 class="headline">Nueva lista</h3>
          </v-card-title>
          <v-form @submit.prevent="addNewList">
            <v-card-text>
              <v-form>
                <v-layout>
                  <v-flex>
                    <v-text-field color="secondary" label="Titulo"/>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field color="secondary" label="Icono"/>
                  </v-flex>
                </v-layout>
              </v-form>
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
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Category: () => import("@/components/Category.vue")
  },
  data() {
    return {
      addingList: false
    };
  },
  methods: {
    ...mapActions("TaskLists", ["getTaskLists"]),
    ...mapMutations("TaskLists", ["changeSelectedList"]),
    addNewList() {
      alert("creando lista");
    },
    changeCategory(id) {
      this.changeSelectedList(id)
      if (!this.$vuetify.breakpoint.lgAndUp) this.sidebar = false;
    }
  },
  computed: {
    sidebar: {
      get() {
        return this.$store.state.Sidebar.isOpen;
      },
      set(value) {
        this.$store.commit("toggleSidebar", value);
      }
    },
    ...mapState({
      taskLists: state => state.TaskLists.lists,
      selectedList: state => state.TaskLists.selectedList
    })
  },
  mounted() {
    this.getTaskLists();
  }
};
</script>

<style>
</style>
