<template>
  <v-toolbar color="primary" dark app>
    <v-toolbar-side-icon @click="toggleSidebar(true)" class="hidden-lg-and-up"/>
    <v-toolbar-title class="headline text-uppercase hidden-lg-and-up">
      <router-link tag="span" to="/" style="cursor:pointer">
        <span>DXC</span>
        <span class="font-weight-light">- To do</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer/>
    <span class="mr-1">Conectado</span>
    <v-icon>signal_wifi_4_bar</v-icon>
    <!-- <v-icon>
        signal_wifi_off
    </v-icon>-->
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["toggleSidebar"])
  }
};
</script>

<style>
</style>
