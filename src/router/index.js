import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue"
import About from "@/views/About.vue"
import OneHulledSailingYachts from '@/views/OneHulledSailingYachts';

Vue.use(VueRouter);

//przekierowania do poszczególnych podstron
const routes = [{
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
    },
    {
        path: "/one-hulled-sailing-yachts",
        name: "one-hulled-sailing-yachts",
        component: OneHulledSailingYachts
    },
    { path: '*', redirect: '/' }, //przekierowanie dla błędnej nazwy strony
];

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes
});

export default router;