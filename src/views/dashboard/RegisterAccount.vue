<template>
  <v-card
    class="mx-auto my-12 d-flex"
    max-width="800"
    elevation="8"
    shaped
  >
    <div class="login-background">
      <div class="text-1">
        Welcome to
      </div>
      <div class="text-2">
        Ifootball
      </div>
    </div>
    <div class="form-signup">
      <v-text-field
        v-model="user.username"
        class="email-input"
        label="username"
        placeholder="username"
        type="text"
        required
      />
      <v-text-field
        v-model="user.password"
        label="Password"
        placeholder="Password"
        type="password"
        required
      />
      <v-text-field
        v-model="user.email"
        label="Email"
        placeholder="Email"
        required
      />
      <v-text-field
        v-model="user.phoneNumber"
        label="Phone Number"
        placeholder="PhoneNumber"
        type="number"
        required
      />
      <v-btn
        class="justify-center mt-5 btn-signup"
        color="primary"
        elevation="7"
        rounded
        @click.prevent="signup"
      >
        Sign up
      </v-btn>
    </div>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          username: null,
          password: null,
          email: null,
          phoneNumber: null,
        },
      }
    },
    methods: {
      async signup () {
        const request = {
          username: this.user.username ? this.user.username : null,
          password: this.user.password ? this.user.password : null,
          email: this.user.email ? this.user.email : null,
          phoneNumber: this.user.phoneNumber ? this.user.phoneNumber : null,
          roleId: 2,
        }
        const response = await this.$store.dispatch('auth/register', request)
        console.log('response', response)
        if (response.data) {
          alert('Sign up successed! Lets sign in with your account')
          this.$cookies.set('Authorization', response.data)
          this.$router.push({ path: '/login' })
        }
      },
    },
  }
</script>
<style scoped>
.login-background {
    width: 400px;
    height: 500px;
    background-color: #4CAF50;
}
.text-1 {
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    font-family: system-ui;
    margin-top: 190px;
    letter-spacing: 2px;
}
.text-2 {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    font-family: system-ui;
    letter-spacing: 2px;
}
.form-signup {
    width: 400px;
    padding: 20px;
}
.email-input {
    margin-top: 100px;
}
.btn-signup {
    width: 100% !important;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 3px;
}
.text-3 {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
    color: gray;
}
</style>
