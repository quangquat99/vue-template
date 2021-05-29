<template>
  <v-simple-table
    fixed-header
    height="350px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left text-header-table">
            Name
          </th>
          <th class="text-left text-header-table">
            Role
          </th>
          <th class="text-left text-header-table">
            Phone
          </th>
          <th class="text-left text-header-table">
            Email
          </th>
          <th class="text-left text-header-table">
            Address
          </th>
          <th class="text-left text-header-table">
            Created Date
          </th>
          <th class="text-left text-header-table">
            Status
          </th>
          <th class="text-center text-header-table">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.role }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.status }}</td>
          <td class="text-center">
            <v-btn
              color="primary"
              class=""
              x-small
              outlined
            >
              <v-icon size="16">
                mdi-pencil
              </v-icon>
            </v-btn>
          </td>
        </tr>
        {{ userList }}
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    data () {
      return {}
    },
    computed: {
      userList () {
        return this.$store.state.user.userList
      },
    },
  }
</script>
<style scoped>
.text-header-table {
  font-weight: bold;
  font-size: 16px !important;
}
.v-data-table table tbody tr td .v-btn {
  margin-right: 20px !important;
}
</style>
