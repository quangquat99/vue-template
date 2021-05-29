<template>
  <v-app>
    <dashboard-core-drawer />

    <dashboard-core-view class="view" />
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreView: () => import('./components/core/View'),
    },

    data: () => ({
    }),
  }
</script>
<style scoped>
.view {
  padding: 0 0 0 275px !important;
}
</style>
