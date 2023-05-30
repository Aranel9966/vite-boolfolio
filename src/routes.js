import { createRouter, createWebHistory } from "vue-router";
import AppIndex from "./pages/AppIndex.vue";
import AppAbout from "./pages/AppAbout.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: AppIndex,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
  ],
});
export { router };
