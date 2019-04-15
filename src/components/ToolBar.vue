<template>
  <v-toolbar color="primary" dark app clipped-left>
    <v-toolbar-side-icon v-if="$route.name == 'home'" @click="$emit('openSide')" class="hidden-lg-and-up"/>
    <v-btn v-else icon to="/">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title class="headline text-uppercase">
        <span>DXC</span>
        <span class="font-weight-light"> - Todo</span>
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
export default {};
</script>

<style>
</style>
