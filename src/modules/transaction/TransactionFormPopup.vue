<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Transaction</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Product"
              />
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Customer"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Employee" />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Status" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="red"
          text
          @click="close"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
    }),
    computed: {
      dialog: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        },
      },
    },
    methods: {
      close () {
        this.$emit('input', false)
      },
    },
  }
</script>

<style>

</style>
