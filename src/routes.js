import { createRouter, createWebHistory } from "vue-router";
import AppIndex from "./pages/AppIndex.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppTechnology from "./pages/AppTechnology.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppIndex,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
      meta: {
        title: "Chi sono?",
      },
    },
    {
      path: "/technology",
      name: "technology",
      component: AppTechnology,
      meta: {
        title: "Tecnologie",
      },
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: SingleProject,
      meta: {
        title: "Progetti",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
      meta: {
        title: "404",
      },
    },
  ],
});
router.beforeEach((to) => {
  document.title = to.meta?.title
    ? "Boolfolio - " + to.meta.title
    : "Boolfolio";
});
export { router };
