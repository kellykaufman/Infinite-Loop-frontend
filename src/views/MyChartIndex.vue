<template>
  <div class="chart-index">
    <div v-for="anxieties in anxieties" :key="anxieties.id">
      {{ anxieties }}

      <button v-on:click="createanxiety">New Anxiety</button>
    </div>
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
    createanxiety: function () {
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
