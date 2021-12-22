import Vue from "vue";
import VueRouter from "vue-router";
import MyChartIndex from "../views/MyChartIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import EditAnxieties from "../views/EditAnxieties.vue";
import AnxietyThemes from "../views/AnxietyThemes.vue";

Vue.use(VueRouter);

const routes = [
  {
    //You declare this:
    path: "/signup",
    // Comes from div class:
    name: "signup",
    // This is the name of the file:
    component: Signup,
  },
  {
    //You declare this:
    path: "/anxiety-themes",
    // Comes from div class:
    name: "anxiety-themes",
    // This is the name of the file:
    component: AnxietyThemes,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },

  {
    //You declare this:
    path: "/chart-index",
    // Comes from class div:
    name: "chart-index",
    // This is the name of the file:
    component: MyChartIndex,
  },
  {
    //You declare this:
    path: "/edit-anxieties/:id",
    // Comes from class div:
    name: "edit-anxieties",
    // This is the name of the file:
    component: EditAnxieties,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
