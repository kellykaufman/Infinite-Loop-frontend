<template>
  <div class="edit-anxiety">
    <form v-on:submit.prevent="editAnxieties()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="create-border">
        <br />
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
          <input type="number" v-model="currentAnxietyParams.timer" />
        </div>
        <div>
          <label>Progress: </label>
          <input type="text" v-model="currentAnxietyParams.progress" />
        </div>
        <br />
        <input
          class="btn btn-primary-gradient btn-sm"
          type="submit"
          value="Update"
        />
        <br />
        <br />
        <button
          class="btn btn-primary-gradient btn-sm"
          v-on:click="deleteAnxieties()"
        >
          Delete
        </button>
        <br />
      </div>
    </form>
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

<style>
.create-border {
  color: white;
  border-style: dotted;
  border-color: white;
  width: 500px;
  padding-left: 50px;
  padding-bottom: 25px;
}

.edit-anxiety {
  margin-top: 100px;
  color: white;
  padding-left: 75px;

  /* Google fonts: Font-Family */
  background-image: linear-gradient(
    to left,
    rgba(46, 46, 173, 0.635),
    rgb(125, 77, 161)
  );
}
</style>
