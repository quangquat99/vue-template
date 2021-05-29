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
            Phone
          </th>
          <th class="text-left text-header-table">
            Email
          </th>
          <th class="text-left text-header-table">
            Address
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
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
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
            <v-btn
              color="red"
              class=""
              x-small
              outlined
            >
              <v-icon size="16">
                mdi-delete
              </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            role: 'Admin',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 2',
            role: 'Employee',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 3',
            role: 'Employee',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 4',
            role: 'Employee',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 5',
            role: 'Admin',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 6',
            role: 'Admin',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 7',
            role: 'Admin',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 8',
            role: 'Admin',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 9',
            role: 'Employee',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 10',
            role: 'Admin',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
          {
            name: 'Frozen Yogurt 11',
            role: 'Employee',
            phone: '098765432',
            email: 'email@tt.com',
            address: 'Đại học quốc gia Hà Nội',
            createdAt: '12-03-2021',
            status: 'active',
          },
        ],
      }
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
