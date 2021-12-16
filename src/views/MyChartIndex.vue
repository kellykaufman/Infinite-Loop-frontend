<template>
  <div class="chart-index">
    <div v-for="anxieties in anxieties" :key="anxieties.id">
      {{ anxieties }}
    </div>
    <form v-on:submit.prevent="createAnxiety()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Life Theme: </label>
        <input type="text" v-model="anxiety.life_theme" />
      </div>
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      anxieties: [],
      anxiety: {},
      errors: [],
    };
  },
  created: function () {
    this.anxietiesindex();
  },
  methods: {
    anxietiesindex: function () {
      axios.get("/anxieties").then((response) => {
        this.anxieties = response.data;
        console.log("All anxieties", this.anxieties);
      });
    },
    createAnxiety: function () {
      console.log("Making a new anxiety!");
      axios
        .post("/anxieties", this.anxiety)
        .then(() => {
          this.$router.push("/anxieties");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
