import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../pages/Accueil.vue";
import NotFound from "../pages/NotFound.vue";
import MentionsLegales from "../pages/MentionsLegales.vue";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite.vue";
import CGV from "../pages/CGV.vue";

const routes = [
  {
    path: "/",
    name: 'Accueil',
    component: Accueil,
    meta: { title: 'Dubby Code · Développeur web éco-responsable'}
  },
  {
    path: "/mentions-legales",
    name: 'mentions-legales',
    component: MentionsLegales,
    meta: { title: 'Dubby Code · Mentions légales' }
  },
  {
    path: "/politique-de-confidentialite",
    name: 'politique-de-confidentialite',
    component: PolitiqueConfidentialite,
    meta: { title: 'Dubby Code · Politique de confidentialité'}
  },
  {
    path: "/cgv",
    name: 'cgv',
    component: CGV,
    meta: { title: 'Dubby Code · Condition générale de vente'}
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: NotFound,
    meta: { title: 'Dubby Code · Page introuvable'}
  },
];

const router = createRouter({
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

router.afterEach ((to) => {
  document.title = to.meta.title || 'Dubby Code'
})

export default router



