<template>
  <v-app>
    <tool-bar @openSide="sidebar=true"/>
    <bars v-if="$route.name == 'home'" v-model="sidebar"/>
    <v-content>
      <router-view/>
    </v-content>
    <snack/>
  </v-app>
</template>

<script>
export default {
  components: {
    ToolBar: () => import("@/components/ToolBar.vue"),
    Bars: () => import("@/components/Bars.vue"),
    Snack: () => import("@/components/Snack.vue")
  },
  data() {
    return {
      sidebar: null
    };
  }
};
</script>