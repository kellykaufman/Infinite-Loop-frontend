<template>
  <div class="chart-index">
    <section class="pt-6 pb-10">
      <div class="container">
        <br />
        <br />
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
        <div class="row">
          <div v-for="anxieties in anxieties" :key="anxieties.id">
            <div class="col-lg-10 col-md-8 mt-10">
              <article class="card shadow-lg">
                <img class="card-img-top" src="/assets/img/blog/Union7.jpg" />
                <div class="card-body">
                  <!-- <p class="text-primary"><a href="#">PHP & My SQL</a></p> -->

                  <div>
                    Life theme:
                    <span class="user-input">{{ anxieties.life_theme }}</span>
                  </div>
                  <div>
                    Intrusive thought OR feeling:
                    <span class="user-input">{{
                      anxieties.intrusive_thought_or_feeling
                    }}</span>
                  </div>
                  <div>
                    Anxiety Theme:
                    <span class="user-input">{{
                      anxieties.anxiety_theme
                    }}</span>
                  </div>
                  <div>
                    Opposite Action:
                    <span class="user-input">{{
                      anxieties.opposite_action
                    }}</span>
                  </div>
                  <div>
                    Timer:
                    <span class="user-input">{{ anxieties.timer }}</span>
                  </div>
                  <div>
                    Progress:
                    <span class="user-input">{{ anxieties.progress }}</span>
                  </div>
                  <router-link v-bind:to="`/edit-anxieties/${anxieties.id}`">
                    <button>Edit</button>
                  </router-link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.card-body {
  color: blueviolet;
  font-weight: bold;
  font-size: 13pt;
}

.user-input {
  color: blueviolet;
  font-weight: normal;
  font-size: 10pt;
}
</style>

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
