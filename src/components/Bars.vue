<template>
  <v-navigation-drawer app :value="value" @input="handle" clipped>
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
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  props: ['value'],
  components: {
    Category: () => import('@/components/Category.vue'),
    AddList: () => import('@/components/AddList.vue'),
  },
  methods: {
    ...mapActions('TaskLists', ['getTaskLists']),
    ...mapMutations('TaskLists', ['changeSelectedList']),
    ...mapActions('Task', ['getTasks']),
    changeCategory(id) {
      this.changeSelectedList(id);
      if (!this.$vuetify.breakpoint.lgAndUp) this.$emit('input', false);
    },
    handle(e) {
      this.$emit('input', e);
    },
  },
  watch: {
    selectedList(newValue) {
      this.getTasks(newValue);
    },
  },
  computed: {
    ...mapState({
      taskLists: state => state.TaskLists.lists,
      selectedList: state => state.TaskLists.selectedList,
    }),
  },
  mounted() {
    this.getTaskLists();
  },
};
</script>

<style>
</style>
