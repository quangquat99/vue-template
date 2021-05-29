<template>
  <v-content>
    <account-menu
      @show-change-password-popup="showChangePasswordPopup"
      @show-profile="showProfile"
    />
    <router-view />
    <change-password-popup
      v-if="isShowChangePassword"
      v-model="isShowChangePassword"
    />
    <view-profile
      v-if="isShowProfile"
      v-model="isShowProfile"
    />
  </v-content>
</template>

<script>
  import AccountMenu from './AccountMenu.vue'
  import ChangePasswordPopup from './ChangePasswordPopup.vue'
  import ViewProfile from './ViewProfile.vue'
  export default {
    name: 'DashboardCoreView',

    components: {
      AccountMenu,
      ChangePasswordPopup,
      ViewProfile,
    },
    data () {
      return {
        isShowChangePassword: false,
        isShowProfile: false,
      }
    },
    async created () {
      await this.$store.dispatch('auth/getProfile')
    },
    methods: {
      showChangePasswordPopup () {
        this.isShowChangePassword = true
      },
      showProfile () {
        this.isShowProfile = true
      },
    },
  }
</script>
