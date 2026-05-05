import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: 'Accueil',
    component: () => import('../pages/Accueil.vue'),
    meta: { title: 'Dubby Code · Développeur web éco-responsable'}
  },
  {
    path: "/mentions-legales",
    name: 'mentions-legales',
    component: () => import('../pages/MentionsLegales.vue'),
    meta: { title: 'Dubby Code · Mentions légales' }
  },
  {
    path: "/politique-de-confidentialite",
    name: 'politique-de-confidentialite',
    component: () => import('../pages/PolitiqueConfidentialite.vue'),
    meta: { title: 'Dubby Code · Politique de confidentialité'}
  },
  {
    path: "/cgv",
    name: 'cgv',
    component: () => import('../pages/CGV.vue'),
    meta: { title: 'Dubby Code · Condition générale de vente'}
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: 'Dubby Code · Page introuvable'}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return false
    return { top: 0 }
  },
})

router.afterEach ((to) => {
  document.title = to.meta.title || 'Dubby Code'
})

export default router



