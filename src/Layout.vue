<template>
  <v-app>
    <top-bar></top-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  name: 'Layout',
  components: { TopBar },
};
</script>
