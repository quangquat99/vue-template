<template>
  <div>
    <filter-form @show-product-form="showProductForm" />
    <product-list />
    <product-form-popup
      v-if="isShowProductForm"
      v-model="isShowProductForm"
    />
  </div>
</template>

<script>
  import ProductList from './ProductList.vue'
  import FilterForm from './FilterForm.vue'
  import ProductFormPopup from './ProductFormPopup.vue'
  export default {
    name: 'UserPage',
    components: {
      ProductList,
      FilterForm,
      ProductFormPopup,
    },
    data () {
      return {
        isShowProductForm: false,
      }
    },
    methods: {
      showProductForm () {
        this.isShowProductForm = true
      },
    },
  }
</script>

<style></style>
