<template>
  <div class="container d-flex flex-column">
    <div
      class="row align-items-center justify-content-center no-gutters min-vh-100"
    >
      <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11">
        <h1 class="font-bold text-center">Sign up</h1>
        <p class="text-center mb-6">Create an account with Self Agency</p>
        <ul v-for="(error, index) in errors" :key="index">
          <li class="small text-danger">{{ error[0] }}</li>
        </ul>
        <form @submit.prevent="createAccount()" class="mb-6">
          <div class="row">
            <div class="form-group col-md-6">
              <label>First Name</label>
              <input
                v-model="firstName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter your first name"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Last Name</label>
              <input
                v-model="lastName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div class="row">
          <div class="form-group col-md-6">
            <label>Age</label>
            <input
              v-model="age"
              type="number"
              class="form-control form-control-lg"
              placeholder="How old are you?"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Gender</label>
            <select
              v-model="gender"
              type="text"
              class="form-control form-control-lg"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              v-model="email"
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <div class="row">
            <div class="form-group col-md-6">
            <label>Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Confirm Password</label>
            <input
              v-model="password_confirmation"
              type="password"
              class="form-control form-control-lg"
              placeholder="Retype your password"
            />
          </div>
          </div>
          <button class="btn btn-lg btn-block btn-primary" type="submit">
            Create account
          </button>
        </form>
        <p class="text-center">
          Already have account <a href="/login">Login to your accout</a>.
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
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
      password: "",
      password_confirmation: "",
    };
  },
  computed: {
    ...mapGetters(["errors"]),
  },
  methods: {
    ...mapActions(["register"]),
    createAccount() {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        gender: this.gender,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }
      this.register(user)
    }
  }
};
</script>

<style></style>
