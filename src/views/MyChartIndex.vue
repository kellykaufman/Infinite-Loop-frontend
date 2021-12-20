<template>
  <div class="chart-index">
    <section class="pt-6 pb-10">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mt-6">
            <article class="card shadow-lg">
              <img class="card-img-top" src="/assets/img/blog/Union7.jpg" />
              <div class="card-body">
                <p class="text-primary"><a href="#">PHP & My SQL</a></p>
                <h4>
                  <a href="blog-details.html"
                    >Expand Your Programming Knowledge</a
                  >
                </h4>
                <p>
                  28 Dec, 2019 - by <a href="#" class="text-primary"> Alex</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <div v-for="anxieties in anxieties" :key="anxieties.id">
      <div>{{ anxieties }}</div>
      <router-link v-bind:to="`/edit-anxieties/${anxieties.id}`">
        <button>Edit</button>
      </router-link>
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
