import Vue from "vue";
import VueRouter from "vue-router";
import MyChartIndex from "../views/MyChartIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MyTrends from "../views/MyTrends.vue";

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
    path: "/login",
    name: "login",
    component: Login,
  },

  { path: "/logout", name: "logout", component: Logout },

  {
    //You declare this:
    path: "/chart-index",
    // Comes from class div:
    name: "chart-index",
    // This is the name of the file:
    component: MyChartIndex,
  },
  {
    path: "/my-trends",
    name: "my-trends",
    component: MyTrends,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
