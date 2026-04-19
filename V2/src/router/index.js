import { createRouter, createWebHistory } from "vue-router";
import  Accueil from "../pages/Accueil.vue";
import  NotFound  from "../pages/NotFound.vue";
import MentionsLegales from "../pages/MentionsLegales.vue";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite.vue";

const routes = [
  { path: "/",                component: Accueil },
  { path: "/mentions-legales", component: MentionsLegales},
  { path: "/politique-de-confidentialite", component: PolitiqueConfidentialite },
  { path: "/:pathMatch(.*)*", component: NotFound },
  
]

export default createRouter({
  history: createWebHistory(),
  routes
})