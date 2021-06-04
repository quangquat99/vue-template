<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="500"
    elevation="8"
    shaped
  >
    <div class="reset-password mt-5">
      <h1 class="text-1">
        Reset password
      </h1>
      <div class="mt-5 text-2">
        Enter the email associated with your account and
        we'll send an email with instructions to reset your password.
      </div>
    </div>

    <div class="form-login">
      <v-text-field
        label="Email"
        placeholder="Email"
        type="email"
        required
      />
      <v-btn
        class="justify-center my-7 btn-send-mail"
        color="primary"
        elevation="7"
        rounded
        @click="sendEmailReset"
      >
        Send email reset
      </v-btn>
    </div>
  </v-card>
</template>
<script>
  export default {
    methods: {
      sendEmailReset () {
        // TODO
        const confirms = confirm('Check your email get reset password and login !')
        if (confirms) { this.$router.push({ path: '/login' }) }
      },
    },
  }
</script>
<style scoped>
.form-login {
    padding: 20px;
}
.reset-password {
    padding: 20px;
}
.btn-send-mail {
    width: 100% !important;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 2px;
}
.text-2 {
    font-weight: 400;
    font-size: 17px;
}
</style>
