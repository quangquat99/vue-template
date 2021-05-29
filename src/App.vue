<template>
  <v-app>
    <router-view />
    <loading-indicator />
  </v-app>
</template>

<script>
  import LoadingIndicator from './views/dashboard/LoadingIndicator.vue'
  export default {
    name: 'App',
    components: {
      LoadingIndicator,
    },
  }
</script>
