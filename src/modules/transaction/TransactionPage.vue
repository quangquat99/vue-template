<template>
  <div>
    <h1>Transaction page</h1>
    <filter-form @show-transaction-form="showTransactionForm" />
    <transaction-list />
    <transaction-form-popup
      v-if="isShowTransactionForm"
      v-model="isShowTransactionForm"
    />
  </div>
</template>

<script>
  import FilterForm from './FilterForm.vue'
  import TransactionList from './TransactionList.vue'
  import TransactionFormPopup from './TransactionFormPopup.vue'
  export default {
    components: {
      FilterForm,
      TransactionList,
      TransactionFormPopup,
    },
    data () {
      return {
        isShowTransactionForm: false,
      }
    },
    methods: {
      showTransactionForm () {
        this.isShowTransactionForm = true
      },
    },
  }
</script>

<style></style>
