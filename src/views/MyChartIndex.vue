<template>
  <div class="chart-index">
    <div v-for="anxieties in anxieties" :key="anxieties.id">
      {{ anxieties }}
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
  },
};
</script>
