import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue"
import About from "@/views/About.vue"
import OneHulledSailingYachts from '@/views/OneHulledSailingYachts';
import OneHulledMotorYachts from '@/views/OneHulledMotorYachts';
import MultiHulledSailingYachts from '@/views/MultiHulledSailingYachts';
import MultiHulledMotorYachts from '@/views/MultiHulledMotorYachts';
import AskForCharterForm from '@/views/AskForCharterForm';
import DisplayOrder from '@/components/DisplayOrder';

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
    {
        path: "/one-hulled-motor-yachts",
        name: "one-hulled-motor-yachts",
        component: OneHulledMotorYachts
    },
    {
        path: "/multi-hulled-sailing-yachts",
        name: "multi-hulled-sailing-yachts",
        component: MultiHulledSailingYachts
    },
    {
        path: "/multi-hulled-motor-yachts",
        name: "multi-hulled-motor-yachts",
        component: MultiHulledMotorYachts
    },
    {
        path: "/ask-for-charter-form",
        name: "ask-for-charter-form",
        component: AskForCharterForm
    },
    {
        path: "/display-order",
        name: "display-order",
        component: DisplayOrder
    },
    { path: '*', redirect: '/' }, //przekierowanie dla błędnej nazwy strony
];

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes
});

export default router;