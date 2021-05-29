<template>
  <div class="filter-form mt-2">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="name"
            label="Customer Name"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="price"
            label="Price"
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
            @click="addTransaction"
          >
            <v-icon>mdi mdi-plus</v-icon>
            <span>Add</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    methods: {
      addTransaction () {
        this.$emit('show-transaction-form')
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
