<template>
  <div>
    <filter-form @show-user-form-popup="showUserFrom" />
    <user-table />
    <user-form-popup
      v-if="isShowUserFormPopup"
      v-model="isShowUserFormPopup"
    />
  </div>
</template>

<script>
  import FilterForm from './FilterForm.vue'
  import UserTable from './UserTable.vue'
  import UserFormPopup from './UserFormPopup.vue'
  export default {
    name: 'UserPage',
    components: {
      FilterForm,
      UserTable,
      UserFormPopup,
    },
    data () {
      return {
        isShowUserFormPopup: false,
      }
    },
    async created () {
      await this.$store.dispatch('user/getAllUser')
    },
    methods: {
      showUserFrom () {
        this.isShowUserFormPopup = true
      },
    },
  }
</script>

<style></style>
