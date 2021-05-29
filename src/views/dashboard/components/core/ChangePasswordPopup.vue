<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Change Password</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <div
            v-if="errorMessage"
            class="error-message"
          >
            {{ errorMessage }}
          </div>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password.oldPassword"
                label="Old Password"
                type="password"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password.newPassword"
                label="New Password"
                type="password"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password.confirmPassword"
                label="Confirm Password"
                type="password"
              />
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
          @click="changePassword"
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
      password: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      errorMessage: null,
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
      async changePassword () {
        const request = {
          password: this.password.oldPassword,
          newPassword: this.password.newPassword,
        }
        const response = await this.$store.dispatch(
          'auth/changePassword',
          request,
        )
        console.log('response', response)
        if (typeof response === 'undefined') {
          this.errorMessage = 'lol linh ngu'
        } else {
          this.$cookies.remove('Authorization')
          this.$router.push({ path: '/login' })
        }
      },
    },
  }
</script>

<style scoped>
.error-message {
  text-align: center;
  color: red;
}
</style>
