<template>
  <div class="filter-form mb-7 mt-2">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="customerName"
            label="Customer name"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="text-sm-right small"
        >
          <v-btn
            small
            color="primary"
          >
            <v-icon>mdi-magnify</v-icon>
            <span>Search</span>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="text-sm-left"
        >
          <v-btn
            small
            color="primary"
            @click="addCustomer"
          >
            <v-icon>mdi mdi-plus</v-icon>
            <span>add</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    methods: {
      addCustomer () {
        this.$emit('show-customer-form-popup')
      },
    },
  }
</script>

<style scoped>
.filter-form {
  background-color: white;
  border-radius: 5px;
}
</style>
