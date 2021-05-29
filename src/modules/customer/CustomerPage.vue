<template>
  <div>
    <h1>Customer Page</h1>
    <filter-form @show-customer-form-popup="showCustomerForm" />
    <customer-table />
    <customer-form-popup
      v-if="isShowCustomerForm"
      v-model="isShowCustomerForm"
    />
  </div>
</template>

<script>
  import FilterForm from './FilterForm.vue'
  import CustomerTable from './CustomerTable.vue'
  import CustomerFormPopup from './CustomerFormPopup.vue'
  export default {
    components: {
      FilterForm,
      CustomerTable,
      CustomerFormPopup,
    },
    data () {
      return {
        isShowCustomerForm: false,
      }
    },
    methods: {
      showCustomerForm () {
        this.isShowCustomerForm = true
      },
    },
  }
</script>

<style></style>
