<template>
  <div class="">
    <form v-on:submit.prevent="editAnxieties()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Life theme: </label>
        <input type="text" v-model="currentAnxietyParams.life_theme" />
      </div>

      <div>
        <label> Intrusive thought or feeling: </label>
        <input
          type="text"
          v-model="currentAnxietyParams.intrusive_thought_or_feeling"
        />
      </div>
      <div>
        <label>Anxiety theme: </label>
        <input type="text" v-model="currentAnxietyParams.anxiety_theme" />
      </div>
      <div>
        <label> Opposite Action: </label>
        <input type="text" v-model="currentAnxietyParams.opposite_action" />
      </div>
      <div>
        <label>Timer: </label>
        <input type="text" v-model="currentAnxietyParams.timer" />
      </div>
      <!-- Do I add user_id ? -->
      <input type="submit" value="Update" />
    </form>
    <br />
    <button v-on:click="deleteAnxieties()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentAnxietyParams: {},
      errors: [],
      status: "",
    };
  },
  created: function () {
    this.anxietiesLoad();
  },
  methods: {
    anxietiesLoad: function () {
      axios.get("/anxieties/" + this.$route.params.id).then((response) => {
        this.currentAnxietyParams = response.data;
        console.log(response.data);
      });
    },
    editAnxieties: function () {
      axios
        .patch("/anxieties/" + this.$route.params.id, this.currentAnxietyParams)
        .then((response) => {
          this.anxieties.push(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response.data);
        });
      this.$router.push(`/chart-index`);
      location.reload();
    },
    deleteAnxieties: function () {
      axios.delete("/anxieties/" + this.$route.params.id).then((response) => {
        console.log("anxiety destroyed!", response.data);
        this.$router.push(`/chart-index`);
      });
    },
  },
};
</script>
