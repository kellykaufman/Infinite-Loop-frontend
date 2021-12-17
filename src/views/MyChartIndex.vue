<template>
  <div class="chart-index">
    <div v-for="anxieties in anxieties" :key="anxieties.id">
      <div>{{ anxieties }}</div>
    </div>
    <form v-on:submit.prevent="createAnxiety()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Life theme: </label>
        <input type="text" v-model="newAnxietyParams.life_theme" />
      </div>

      <div>
        <label> Intrusive thought or feeling: </label>
        <input
          type="text"
          v-model="newAnxietyParams.intrusive_thought_or_feeling"
        />
      </div>
      <div>
        <label>Anxiety theme: </label>
        <input type="text" v-model="newAnxietyParams.anxiety_theme" />
      </div>
      <div>
        <label> Opposite Action: </label>
        <input type="text" v-model="newAnxietyParams.opposite_action" />
      </div>
      <div>
        <label>Timer: </label>
        <input type="text" v-model="newAnxietyParams.timer" />
      </div>
      <!-- Do I add user_id ? -->
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
// import Vue2Filters from "vue2-filters";

export default {
  // mixins: [Vue2Filters.mixins],
  data: function () {
    return {
      anxieties: [],
      newAnxietyParams: {},
      errors: [],
    };
  },
  created: function () {
    this.anxietiesIndex();
  },
  methods: {
    anxietiesIndex: function () {
      axios.get("/anxieties").then((response) => {
        this.anxieties = response.data;
        console.log("All anxieties", this.anxieties);
      });
    },
    createAnxiety: function () {
      axios
        .post("/anxieties", this.newAnxietyParams)
        .then((response) => {
          this.$router.go();
          console.log("Making a new anxiety!", response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
    editAnxiety: function () {},
  },
};
</script>
