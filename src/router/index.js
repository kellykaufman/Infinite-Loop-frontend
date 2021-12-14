import Vue from "vue";
import VueRouter from "vue-router";
import MyChartIndex from "../views/MyChartIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    //You declare this:
    path: "/chart-index",
    // Comes from class div:
    name: "chart-index",
    // This is the name of the file:
    component: MyChartIndex,
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
