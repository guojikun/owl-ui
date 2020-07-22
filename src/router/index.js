import Vue from "vue";
import VueRouter from "vue-router";
import Guide from "../views/guide.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "guide",
        component: Guide,
    },
    {
        path: "/changelog",
        name: "changelog",
        component: () => import(/* webpackChunkName: "changelog" */ "../views/changelog.vue"),
    },
    {
        path: "/icon",
        name: "icon",
        component: () => import(/* webpackChunkName: "icon" */ "../views/icon.vue"),
    },
    {
        path: "/button",
        name: "button",
        component: () => import(/* webpackChunkName: "button" */ "../views/button.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
