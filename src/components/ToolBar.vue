<template>
  <v-toolbar color="primary" dark app clipped-left>
    <v-toolbar-side-icon
      v-if="$route.name == 'home'"
      @click="$emit('openSide')"
      class="hidden-lg-and-up"
    />
    <v-btn v-else icon to="/">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title class="headline text-uppercase">
      <span>DXC</span>
      <span class="font-weight-light">- Todo</span>
    </v-toolbar-title>
    <v-spacer/>
    <template v-if="isOnline">
      <span class="mr-1">Conectado</span>
      <v-icon>signal_wifi_4_bar</v-icon>
    </template>
    <template v-else>
      <span class="mr-1">Desconectado</span>
      <v-icon>signal_wifi_off</v-icon>
    </template>
  </v-toolbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isOnline: state => state.Network.online
    })
  }
};
</script>

<style>
</style>
