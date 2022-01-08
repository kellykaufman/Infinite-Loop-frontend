<template>
  <div class="container-login">
    <div class="dummy-account">
      <label>
        <b><u>Example email:</u></b> winnie@ex.com </label
      ><br />
      <label>
        <b><u>Example password:</u></b> password</label
      >
    </div>
    <form v-on:submit.prevent="submit()">
      <div class="center-pretty">
        <img class="image" src="../assets/Loginphoto.png" alt="image" />
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div class="login-text">
          <div>
            <label>Email:</label>
            <input type="email" v-model="newSessionParams.email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" v-model="newSessionParams.password" />
          </div>
        </div>
        <br />
        <input
          class="btn btn-primary-gradient btn-sm"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/chart-index");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<style>
.dummy-account {
  text-align: right(25px);
}

.login-text {
  text-align: center;
}

.container-login {
  margin-top: 100px;
  color: white;

  /* Google fonts: Font-Family */
  background-image: linear-gradient(
    to left,
    rgba(46, 46, 173, 0.635),
    rgb(125, 77, 161)
  );
}
</style>
