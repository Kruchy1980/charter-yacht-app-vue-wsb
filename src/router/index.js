import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

//przekierowania do poszczególnych podstron
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  routes
});

export default router;
