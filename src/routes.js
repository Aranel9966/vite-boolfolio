import { createRouter, createWebHistory } from "vue-router";
import AppIndex from "./pages/AppIndex.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppTechnology from "./pages/AppTechnology.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppIndex,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/technology",
      name: "technology",
      component: AppTechnology,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: SingleProject,
    },
  ],
});
export { router };
