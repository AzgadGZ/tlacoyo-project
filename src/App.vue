<template>
  <v-app>
    <tool-bar/>
    <bars/>
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
  }
};
</script>