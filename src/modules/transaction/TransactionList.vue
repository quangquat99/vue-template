<template>
  <div class="mt-5">
    <v-card
      v-for="transaction in transactions"
      :key="transaction.id"
      elevation="2"
      class="transaction-list"
    >
      <v-row>
        <v-col
          cols="12"
          md="2"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-h5 mb-2 font-weight-bold">
                Product
              </div>
              <v-list-item-title class="text-h4 mb-3">
                {{ transaction.product }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-h5 mb-2 font-weight-bold">
                Customer
              </div>
              <v-list-item-title class="text-h4 mb-3">
                {{ transaction.customer }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-h5 mb-2 font-weight-bold">
                Employee
              </div>
              <v-list-item-title class="text-h4 mb-3">
                {{ transaction.employee }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-h5 mb-2 font-weight-bold">
                Price
              </div>
              <v-list-item-title class="text-h4 mb-3">
                {{ transaction.price }} $
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-h5 mb-2 font-weight-bold">
                Status
              </div>
              <v-list-item-title
                class="text-h4 mb-3"
                :style="{color: checkTransactionStatus(transaction.status)}"
              >
                {{ transaction.status }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="text-h5 mb-2 font-weight-bold">
                Date
              </div>
              <v-list-item-title class="text-h4 mb-3">
                {{ transaction.date }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <div class="group-btn">
        <div class="view-detail mb-1">
          <v-btn
            outlined
            x-small
            color="blue"
            @click="viewTransactionHistory(transaction)"
          >
            <v-icon size="16">
              mdi-step-forward-2
            </v-icon>
          </v-btn>
        </div>
        <div class="edit-transaction mb-1">
          <v-btn
            outlined
            x-small
            color="green"
            @click="editTransaction(transaction)"
          >
            <v-icon size="16">
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
        <div class="delete-transaction">
          <v-btn
            outlined
            x-small
            color="red"
            @click="deleteTransaction(transaction)"
          >
            <v-icon size="16">
              mdi-delete
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transactions: [
          {
            id: 1,
            product: 'Java Web Development',
            customer: 'Davidd',
            employee: 'hieuthunhat',
            price: 2000,
            date: '25-04-2022',
            status: 'cancel',
          },
          {
            id: 2,
            product: 'Flutter Development',
            customer: 'Davidd',
            employee: 'Cẩu',
            price: 5000,
            date: '25-04-2022',
            status: 'done',
          },
          {
            id: 3,
            product: 'Java Web Development',
            customer: 'Davidd',
            employee: 'hieuthuhai',
            price: 2500,
            date: '25-04-2022',
            status: 'inprogress',
          },
          {
            id: 4,
            product: 'Java Web Development',
            customer: 'Davidd',
            employee: 'hieuthuba',
            price: 200,
            date: '25-04-2022',
            status: 'done',
          },
        ],
      }
    },
    methods: {
      checkTransactionStatus (status) {
        if (status === 'cancel') return 'red'
        else if (status === 'inprogress') return 'blue'
        else return 'green'
      },
      viewTransactionHistory (transaction) {
        console.log('transaction', transaction)
        this.$router.push({ name: 'transaction-history', params: { id: transaction.id } })
      },
      editTransaction (transaction) {
        console.log('edit transaction', transaction)
      },
      deleteTransaction (transaction) {
        console.log('delete transaction', transaction)
      },
    },
  }
</script>

<style scoped>
.group-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
