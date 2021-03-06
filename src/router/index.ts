import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Regimens from "../views/Regimens.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Regimens",
    component: Regimens,
  },
  {
    path: "/beers",
    name: "Beers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "beers" */ "../views/Beers.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
