<template>
  <div class="container d-flex flex-column">
    <div
      class="row align-items-center justify-content-center no-gutters min-vh-100"
    >
      <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11">
        <h1 class="font-bold text-center">Sign in</h1>
        <p class="text-center mb-6">Welcome back to Self Agency</p>
        <ul v-for="(error, index) in errors" :key="index">
          <li class="small text-danger">{{ error[0] }}</li>
        </ul>
        <form @submit.prevent="loginToAccount()" class="mb-6">
          <div class="form-group">
            <label for="email" class="sr-only">Email Address</label>
            <input
              v-model="email"
              type="email"
              class="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label for="email" class="sr-only">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div class="form-group d-flex justify-content-between">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                checked=""
                id="checkbox-remember"
              />
              <label class="custom-control-label" for="checkbox-remember"
                >Remember me</label
              >
            </div>
            <a href="/">Reset password</a>
          </div>

          <!-- Submit -->
          <button class="btn btn-lg btn-block btn-primary" type="submit">
            Sign in
          </button>
        </form>
        <p class="text-center">
          Don't have an account yet <a href="/register">Create an account</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["errors"]),
  },
  methods: {
    ...mapActions(["login"]),
    loginToAccount() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.login(user);
    },
  },
};
</script>

<style></style>
