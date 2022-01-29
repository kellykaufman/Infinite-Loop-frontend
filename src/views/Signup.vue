<template>
  <div class="signup">
    <!-- <section class="center-pretty min-vh-100 flex-center py-10 shape-container"> -->
    <div class="container center-pretty">
      <div class="row mt-5 align-items-center">
        <div class="col-md-8 text-white mt-6">
          <div class="signup-form">
            <img class="image" src="../assets/signup-IMG.png" alt="image" />
            <p class="lead text-white-08 my-4">
              An app to help users track their anxiety.
            </p>
            <form v-on:submit.prevent="submit()">
              <ul>
                <li v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </li>
              </ul>
              <div class="please-work">
                <label>Full Name: </label>
                <input type="text" v-model="newUserParams.full_name" />
              </div>
              <p></p>
              <div class="please-work">
                <label>Email: </label>
                <input type="email" v-model="newUserParams.email" />
              </div>
              <p></p>
              <div class="please-work">
                <label>Password: </label>
                <input type="password" v-model="newUserParams.password" />
              </div>
              <p></p>
              <div class="please-work">
                <label>Password confirmation: </label>
                <input
                  type="password"
                  v-model="newUserParams.password_confirmation"
                />
              </div>

              <p></p>
              <br />
              <input
                class="btn btn-warning-gradient btn-pill width-10rem m-2"
                type="submit"
                value="Signup"
              />
            </form>
          </div>
        </div>
        <div class="col-md-6 text-right"></div>
      </div>
    </div>
    <!-- </section> -->
  </div>
</template>

<style>
.signup-form {
  margin-left: 375px;
}

.signup {
  text-align: center;
  color: white;
  background-image: linear-gradient(
    to left,
    rgba(46, 46, 173, 0.635),
    rgb(125, 77, 161)
  );
}

.center-pretty {
  text-align: center;
  /* margin-left: 350px; */
}

.please-work {
  text-align: left;
  margin-left: 13px;
}

.image {
  height: 150px;
  width: 150px;
}

html {
  margin-top: 50px;
}
</style>

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
          this.$router.push("/path");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
