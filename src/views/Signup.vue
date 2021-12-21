<template>
  <div class="signup">
    <section
      class="min-vh-100 flex-center py-10 shape-container"
      style="background-image: linear-gradient(to left, #7c24ff, #0b53ff)"
    >
      <div class="container">
        <div class="row mt-6 align-items-center">
          <div class="col-md-6 text-white mt-5">
            <h2 class="rtx-bold display-md-1 text-white">
              Boosts your website Traffic with Fury
            </h2>
            <p class="lead text-white-08 my-4">
              Start working with an SEO company that can provide everything you
              need to increase sales.
            </p>
            <a
              class="btn btn-warning-gradient btn-pill width-10rem m-2"
              href="#"
              >Read more</a
            ><a class="btn btn-white btn-pill width-10rem m-2" href="#"
              >Learn more</a
            >
          </div>
          <div class="col-md-6 text-right"></div>
        </div>
      </div>
    </section>
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Full Name:</label>
        <input type="text" v-model="newUserParams.full_name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
