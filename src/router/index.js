import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Graphics from "../components/Graphics.vue";
import Threed from "../components/Threed.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/graphics",
    name: "Graphics",
    component: Graphics,
  },
  {
    path: "/threed",
    name: "Threed",
    component: Threed,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
