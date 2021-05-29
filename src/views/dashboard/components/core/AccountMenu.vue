<template>
  <div class="d-flex justify-end">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          text
          v-on="on"
        >
          <v-icon size="25">
            mdi-account-circle
          </v-icon>
          <span class="ml-2">USERNAME</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="editProfile">
          <v-icon>mdi-pencil</v-icon>
          <span class="ml-2">Profile</span>
        </v-list-item>
        <v-list-item @click="changePassword">
          <v-icon>mdi-source-branch</v-icon>
          <span class="ml-2">Change password</span>
        </v-list-item>
        <v-list-item @click="logout">
          <v-icon>mdi-logout</v-icon>
          <span class="ml-2">Logout</span>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    methods: {
      changePassword () {
        this.$emit('show-change-password-popup')
      },
      logout () {
        this.$cookies.remove('Authorization')
        this.$router.push({ path: '/login' })
      },
      editProfile () {
        this.$emit('show-profile')
      },
    },
  }
</script>

<style>

</style>
