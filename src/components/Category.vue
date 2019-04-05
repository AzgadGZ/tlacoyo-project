<template>
  <v-list-tile
    :style="{background: isActive ? '#eee' : ''}"
    @click="$emit('clicked', category._id)"
    avatar
    :color=" isActive ? 'primary' : '' "
  >
    <v-list-tile-avatar>
      <v-icon class="accent lighten-1 white--text">{{category.iconName}}</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title :class="{'font-weight-black': isActive}">{{category.name}}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    category: Object,
    isActive: Boolean
  }
};
</script>

<style>
</style>
