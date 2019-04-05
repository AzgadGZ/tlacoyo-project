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
    <add-list/>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Category: () => import("@/components/Category.vue"),
    AddList: () => import("@/components/AddList.vue")
  },
  methods: {
    ...mapActions("TaskLists", ["getTaskLists"]),
    ...mapMutations("TaskLists", ["changeSelectedList"]),
    ...mapActions("Task", ["getTasks"]),
    changeCategory(id) {
      this.changeSelectedList(id);
      if (!this.$vuetify.breakpoint.lgAndUp) this.sidebar = false;
    }
  },
  watch: {
    selectedList(newValue) {
      this.getTasks(newValue);
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
