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
        Sales Operations
      </div>
    </div>
    <div class="form-login">
      <v-text-field
        v-model="user.username"
        class="username-input"
        label="Username"
        placeholder="Username"
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
      <v-btn
        class="justify-center mt-5 btn-login"
        color="primary"
        elevation="7"
        rounded
        @click.prevent="login"
      >
        sign in
      </v-btn>
      <div
        class="forgot-password d-flex justify-sm-end mt-4"
        @click="forgotPassword"
      >
        forgot password?
      </div>
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
        },
      }
    },
    methods: {
      forgotPassword () {
        this.$router.push({ path: '/forgot-password' })
      },
      async login () {
        const request = {
          username: this.user.username ? this.user.username : null,
          password: this.user.password ? this.user.password : null,
        }
        const response = await this.$store.dispatch('auth/login', request)

        if (response.data) {
          this.$cookies.set('Authorization', response.data)
          this.$router.push({ path: '/' })
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
.form-login {
    width: 400px;
    padding: 20px;
}
.username-input {
    margin-top: 100px;
}
.btn-login {
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
.social-network {
    text-align: center;
    margin-top: 30px;
}
.forgot-password {
    color: gray;
    cursor: pointer;
}
.forgot-password:hover {
    color: rgb(14, 110, 140);
}
</style>
