<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Customer</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Name*"
                placeholder="Customer name"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                label="Status"
                :items="['active', 'inactive']"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Phone" />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Email" />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Address" />
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
