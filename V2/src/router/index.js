import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../pages/Accueil.vue";
import NotFound from "../pages/NotFound.vue";
import MentionsLegales from "../pages/MentionsLegales.vue";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite.vue";
import CGV from "../pages/CGV.vue";

const routes = [
  { path: "/", component: Accueil },
  { path: "/mentions-legales", component: MentionsLegales },
  {
    path: "/politique-de-confidentialite",
    component: PolitiqueConfidentialite,
  },
  { path: "/cgv", component: CGV },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        top: 200,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});
