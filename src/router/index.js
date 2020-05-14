import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue" 
import About from "@/views/About.vue"

Vue.use(VueRouter);

//przekierowania do poszczególnych podstron
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
